import React from 'react';
import './drummachine.scss';

const firstBank= [
  ['First Bank'],
  [{
    keyCode: 81,
    letter: 'Q',
    id: 'BassDrum',
    src: 'http://bigsamples.free.fr/d_kit/bdkick/kickatb.wav'
  }, {
    keyCode: 87,
    letter: 'W',
    id: 'BassDrum-2',
    src: 'http://www.denhaku.com/r_box/tr707/bd1.wav'
  }, {
    keyCode: 69,
    letter: 'E',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    letter: 'A',
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    letter: 'S',
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    letter: 'D',
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    letter: 'Z',
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    letter: 'X',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    letter: 'C',
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }]];

const secondBank = [
  ['Second Bank'],
  [{
  keyCode: 81,
  letter: 'Q',
  id: 'Chord-1',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  letter: 'W',
  id: 'Chord-2',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  letter: 'E',
  id: 'Chord-3',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  letter: 'A',
  id: 'Shaker',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  letter: 'S',
  id: 'Open-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  letter: 'D',
  id: 'Closed-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  letter: 'Z',
  id: 'Punchy-Kick',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  letter: 'X',
  id: 'Side-Stick',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  letter: 'C',
  id: 'Snare',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}]];

const Display = props => {
  return (
    <div>
      <p className="disp">Active: <span id="display">{props.active}</span></p>
    </div>
  )
}

class Bank extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      display: {}
    }

    this.keyPressAudio = this.keyPressAudio.bind(this);
    this.bank = this.bank.bind(this);
  }

  itemClickAudio = url =>{
    let audio = new Audio(url.src);
    audio.play()

    this.setState({ display: url })
  }

  keyPressAudio = () =>{
    if(this.props.active.src){
      let keyAudio = new Audio(this.props.active.src);
      keyAudio.play()

      this.setState({ display: this.props.active })
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps !== prevState.active){
  //     return { display: nextProps.active }
  //   }
  //   return null
  // }

  componentDidMount(){
    document.addEventListener('keydown', this.keyPressAudio)
    //document.addEventListener('click', this.itemClick)
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.keyPressAudio)
    //document.addEventListener('click', this.itemClick)
  }
  // componentDidUpdate(){
  //   this.keyPressAudio()
  // }

  bank(){
    if(this.props.info.length > 0){
      return this.props.info[1].map(item => {
        return (
          <div
            className='drum-pad'
            id={item.id}
            key={item.keyCode}
            onClick={() => this.itemClickAudio(item)}
          >
            <h2>{item.letter}</h2>
            <audio className='clip' id={item.letter} src={item.src}></audio>
          </div>
        )
      })
    }
    return null
  }


  render(){
    console.log(this.props)
    let {display} = this.state;

    return(
      <div>
        <Display active={(display.id) ? display.id : null} />
        <div className="grid-container">
          {this.bank()}
        </div>
      </div>
    )
  }
}

//Main App
export default class DrumMachine extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      bank: firstBank,
      active: {}
    }

    this.myRef = React.createRef();

    this.keyPress = this.keyPress.bind(this);
    this.bankChange = this.bankChange.bind(this);
  }

  //key press functionality
  keyPress = event => {
    //map over array to ensure no crashes
    let item = this.state.bank[1].map(e => {
      if(event.keyCode === e.keyCode){
         let item = this.state.bank[1].find((e) => event.keyCode === e.keyCode);

         return this.setState({ active: item })
      }
      return null
    })

    return item;
  }

  itemClick = event => {
    console.log(event)
  }

  bankChange = () => {
    return ( this.state.bank === firstBank) ? this.setState({ bank: secondBank, active: {} }) : this.setState({ bank: firstBank, active: {} })
  }

  componentDidMount(){
    document.addEventListener('keydown', this.keyPress)
    //document.addEventListener('click', this.itemClick)
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.keyPress)
    //document.addEventListener('click', this.itemClick)
  }

  render(){

    let { active, bank } = this.state;
    console.log(active)

    return(
      <div className="drum-main">
        <div id="drum-machine" style={{margin: 'auto'}}>
          <h1 style={{textAlign: 'center'}}>DrumMachine - Bank: {bank[0]}</h1>
          <div>
            <label className="switch">
              <input type="checkbox" onChange={this.bankChange}/>
              <span className="slider"></span>
            </label>
          </div>
          <Bank info={bank} active={active}/>
        </div>
      </div>
    )
  }
}
