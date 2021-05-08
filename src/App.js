import logo from './logo.svg';
import './App.css';
import React from 'react';
import {state} from 'react';

class App extends React.Component{
  
  constructor(props){
  super(props)
  
  this.state ={
    fullName:'nour',
    bio:'mabiographie',
    imgSrc:"https://media.istockphoto.com/photos/beautiful-long-exposure-chicago-night-skyline-photo-with-building-at-picture-id1001503330?k=6&m=1001503330&s=170667a&w=0&h=SeV_hJr-6gUM8P4bjBqs5Y8NKwcxrmb7I5oykh8HMCE=",
    profession:'etudiante',
    show:true
  };
  }
  toggle ()  {
 this.setState(state => ({
show: !state.show  }),()=>console.log(this.state.show)
)
  }
  render() {
  return (
    <div>
  <button onClick={()=>this.toggle()}>click </button>
  <p>{this.state.show ? this.state.fullName:""}</p>  
  <p>{this.state.show ? this.state.bio:""}</p>  
  <p>{this.state.show ? <img src={this.state.imgSrc} alt='image'/>:""}</p>  
  <p>{this.state.show ? this.state.profession:""}</p>  

  
    </div>
  );
}
}
export default App;
