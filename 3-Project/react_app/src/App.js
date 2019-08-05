// react.jsに記述されているReact（exportされてるもの）とComponentをインポートしている。
// 後者はexportされていないので、{}で囲って表現する
import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component {
  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0",
    padding: "5px",
    borderBottom: "2px solid #900"
  };

  msgStyle2 = {
    fontSize: "20pt",
    color: "white",
    background: "#900",
    margin: "20px 0",
    padding: "5px",
    borderBottom: "2px solid #900"
  };

  btnStyle = {
    fontSize: "16pt",
    padding: "10px"
  };

  constructor(props) {
    super(props);
    this.state = {
      flg: true,
      msg: 'Count start!',
      counter: 0
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state)=>({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg,
    }));
  }

  render() {
    return <div>
      <h1>React</h1>
      {
        this.state.flg ?
        <p style={this.msgStyle}>{this.state.msg}</p>
        :
        <p style={this.msgStyle2}>{this.state.msg}</p>
      }
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }
}

export default App;
