import React from 'react';
import './calculator.scss';

//Live
import Live from '../live.js';

const keyMap =[
  { id:"zero", name:"0"},
  { id:"one", name:"1"},
  { id:"two", name:"2"},
  { id:"three", name:"3"},
  { id:"four", name:"4"},
  { id:"five", name:"5"},
  { id:"six", name:"6"},
  { id:"seven", name:"7"},
  { id:"eight", name:"8"},
  { id:"nine", name:"9"},
  { id:"add", name:"+"},
  { id:"subtract", name:"-"},
  { id:"multiply", name:"*"},
  { id:"divide", name:"/"},
  { id:"decimal", name:"."},
  { id:"clear", name:"C"},
  { id:"equals", name:"="}
]
class Display extends React.Component{
  render(){
    return(
      <div id='display'>
        {this.props.display}
      </div>
    )
  }
}

class Button extends React.Component {
  runParentClick = () => this.props.handleClick(this.props.name);

  render(){
    return(
      <button onClick={this.runParentClick} name={this.props.name} id={this.props.id}>{this.props.name}</button>
    )
  }
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      display: '0',
      operator: false,
      decimal: false
    }
  }

  handleClick = (name) =>{
    console.log(name)
    let {display, operator, decimal} = this.state;

    switch (true) {
      case name === '0' ||
           name === '1' ||
           name === '2' ||
           name === '3' ||
           name === '4' ||
           name === '5' ||
           name === '6' ||
           name === '7' ||
           name === '8' ||
           name === '9':
        if(display !== '0'){
          console.log('work')
          display += name
          operator = false
          console.log(display)
        } else {
          display = name
        }
         this.setState({ display, operator })
        break
        case name === '*' ||
             name === '/' ||
             name === '-' ||
             name === '+':
          if(!operator){
            display += name
            operator = true
            decimal = false
          } else {
            const operatorCut = display.slice(0, display.length-1);
            display = operatorCut
            display += name
          }

        this.setState({ display, operator, decimal })
        break
        case name === '.':
          if(!decimal){
            display += '.'
            decimal = true
          }
          this.setState({ display, decimal})
          break
        case name === 'C':
          display = '0'
          decimal = false
          operator = false

          this.setState({ display, decimal, operator })
          break
        case name === '=':
          display = eval(display)
          operator = false

          this.setState({ display, operator })
          break
        default:
          return null
    }
  }
  //<Button name='' id='' handleClick={this.handleClick} />
  buttonMap = () => keyMap.map(item => (<Button name={item.name} id={item.id} key={item.id} handleClick={this.handleClick} />))

  render(){
    let { display } = this.state;
    return(
      <div className="cal-main">
        <Live type="preview" />
        <div className="header-text">
          <h2>Javascript Calculator</h2>
        </div>
        <div className='container'>
          <Display display={display} />
          <div id='grid-container'>{this.buttonMap()}</div>
        </div>
      </div>
    )
  }
}
