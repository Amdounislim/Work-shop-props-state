import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Card from "./Card";

const obj = [
  { name: "jack", tel: "258469" },
  { name: "slim", tel: "258" },
  { name: "sarra", tel: "254" },
  { name: "anis", tel: "00000" }
];

export default class App extends Component {
  state = {
    count: 0,
    statu:"hello"
  };

  min=()=>{
    this.setState({
      count: this.state.count-1
    })
  }
  render() {
    return (
      <div>
        <Nav title="Contact List" statu={this.state.statu} />
        <div className="list">
          {/* <Card />
        <Card name="jhon" tel="2596"/>
        <Card name="slim" tel="0000"/>
        <Card name="anis" tel="258469"/>
        <Card /> */}
          {obj.map(el => (
            <Card name={el.name} tel={el.tel} Issam={this.state.count} />
          ))}
        </div>
        <div className="count">
          <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
          <p>{this.state.count}</p>
          <button onClick={this.min}>-</button>
        </div>
      </div>
    );
  }
}
