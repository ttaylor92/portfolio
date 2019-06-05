import React from 'react';
import styles from './get.module.css';

import { Spinner } from 'reactstrap';


class GetFunc extends React.Component{
  constructor(props){
    super(props)

    this.state={
      data: [],
      stateSet: false,
      TooltipOpen: false
    }

    this.toggle = this.toggle.bind(this);

    this.stateUpdate = () => this.setState({ data: this.props.data, stateSet: true})
    this.stateReload = () => this.setState({ data: this.props.data })
  }

  shouldComponentUpdate(nextProps, nextState){
     if(nextProps.data && this.state.data !== nextProps.data){
       return true
     }
     return false
   }

  componentDidUpdate(){
    if(this.props.data && !this.state.stateSet){
      this.stateUpdate()
    }
    if(this.state.stateSet && this.props.data[0] !== this.state.data[0]){
      this.stateReload()
    }
  }

  toggle = () => this.setState({ TooltipOpen: true })

  // static getDerivedStateFromProps(props, state){
  //   //check for the update of props from state
  //   if(props.data && state.data !== props.data){
  //     return{
  //       data: props.data
  //     }
  //   }
  //   return null
  // }

  render(){
    console.log(this.state.stateSet)
    if(!this.state.stateSet){
      return (
        <div style={{ textAlign: 'center' }}>
          <Spinner color="primary"/>
        </div>
      )
    }

    return this.state.data[1].map((item, i) => (
      <div className={styles.main} key={i}>
          <h3>{item}</h3>
          <div>
            <p>{`${this.state.data[2][i]}`}</p>
          </div>
            <a href={`${this.state.data[3][i]}`} target="_blank" rel="noopener noreferrer">Click here to read more.</a>
      </div>
    ))
  }
}


export default GetFunc;
