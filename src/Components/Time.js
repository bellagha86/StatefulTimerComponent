import React, { Component } from 'react'
import './Time.css'
export default class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
            hours:0,
            minutes:0,
            seconds:0,
            start:false
          };}       
  tick() {
      this.setState({
        seconds: this.state.seconds+1  
    });
     if (this.state.seconds>59){
      this.setState({ 
      seconds:this.state.seconds=0
     })
    }}
  tickMinutes(){
    this.setState({
      minutes: this.state.minutes+1
    })
if (this.state.minutes>59){
  this.setState({
   minutes: this.state.minutes=0
})}}
tickHours() {

if (this.state.hours>23){
  this.setState(state =>({
    hours: 0
} 
    ))
}else {
  this.setState(state =>({
    hours: state.hours+1
    
}))}}
  buttonsStart=()=>{
 if (!this.state.start){
this.interval = setInterval(() => this.tick(), 1000);
this.interval1= setInterval(() =>this.tickMinutes(),60000);
this.interval2=setInterval(() =>this.tickHours(),3600000);
this.setState({start: !this.state.start});
}else {
clearInterval(this.interval)
clearInterval(this.interval1)
clearInterval(this.interval2) 
this.setState({start: !this.state.start});}

  }
buttonsReset=()=>{
  this.setState(state =>({
    hours: 0,
    minutes:0,
    seconds:0
}))

}
    render() {
        return (
            <div className="stopWatch">
              <div className="chrono">
                <span>{this.state.hours<10?(this.state.hours).toString().padStart(2,'0'):this.state.hours}</span>:
                <span>{this.state.minutes<10?(this.state.minutes).toString().padStart(2,'0'):this.state.minutes}</span>:
                <span>{this.state.seconds<10?(this.state.seconds).toString().padStart(2,'0'):this.state.seconds}

                </span></div><div className="buttons">
                <button className="start" onClick={this.buttonsStart}>{this.state.start?"Pause":"Start"}</button>
                <button className="start1" onClick={this.buttonsReset}>Reset</button></div>
            </div>
        )
        
            
        
    }
}
