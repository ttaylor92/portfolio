import React from 'react';
import './clock.scss';

let moment =  require('moment');

const SetTimer = ({ type, value, handler }) =>(
  <div id={`${type}-div`}>
    <h3 id={`${type}-label`}>{type === 'session' ? 'session ': 'break '}Type</h3>
    <div>
      <button id={`${type}-decrement`} onClick={() => handler(false, `${type}Value`)}>&darr;</button>
      <div id={`${type}-length`}>{value}</div>
      <button id={`${type}-increment`} onClick={() => handler(true, `${type}Value`)}>&uarr;</button>
    </div>
  </div>
)

const Time = ({ header, time }) => (
  <div>
    <h1 id='timer-label'>{header === 'session' ? 'Session' : 'Break'}</h1>
    <h1 id='time-left'>{time}</h1>
  </div>
)

const ControlButtons =({active, reset, playPause}) => (
  <div>
    <button id='start_stop' onClick={playPause}>
      {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
    </button>
    <button id='reset' onClick={reset}>&#8634;</button>
  </div>
)

export default class Clock extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      breakValue: .1,
      sessionValue: .1,
      timeHead: 'session',
      time: 25 * 60 * 1000,
      buttonAction: false,
      touched: false
    }
  }

  setTimerFunc = (inc, type) =>{
    if(this.state[type] === 60 && inc) return
    if(this.state[type] === 1 && !inc) return
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
  }

  resetFunc = () => {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      timeHead: 'session',
      time: 25 * 60 * 1000,
      buttonAction: false,
      touched: false
    })
    clearInterval(this.pomodoro)
    this.audio.pause()
    this.audio.currentTime = 0;
  }

  playButtonFunc = () => {
    if(this.state.buttonAction){
      clearInterval(this.pomodoro)
      this.setState({ buttonAction: false })
    }else{
      if(this.state.touched){
        this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000}), 1000)
        this.setState({ buttonAction: true })
      }else{
        this.setState({
          time: this.state.sessionValue * 60 * 1000,
          touched: true,
          buttonAction: true},() => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000}), 1000))
      }
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState)
    if(prevState.time === 0 && prevState.timeHead === 'session'){
      this.setState({ time: this.state.breakValue * 60 * 1000, timeHead: 'break'})
      this.audio.play()
    }
    if(prevState.time === 0 && prevState.timeHead === 'break'){
      this.setState({ time: this.state.sessionValue * 60 * 1000, timeHead: 'session'})
      this.audio.play()
    }
  }

  render(){
    let {breakValue, sessionValue, timeHead, time, buttonAction} = this.state;

    return(
      <div className="clock-main">
        <h1>Pomodoro Clock</h1>
        <div className='timerContainer'>
          <SetTimer type='break' value={breakValue} handler={this.setTimerFunc}/>
          <SetTimer type='session' value={sessionValue} handler={this.setTimerFunc}/>
        </div>
        <Time header={timeHead} time={moment(time).format('mm:ss')}/>
        <ControlButtons active={buttonAction} reset={this.resetFunc} playPause={this.playButtonFunc}/>
        <audio id='beep' src='https://www.myinstants.com/media/sounds/screenrecord_2015-06-17-19-00-59.mp3' ref={el => this.audio = el}></audio>
      </div>
    )
  }
}
