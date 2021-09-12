import logo from './logo.svg';
import './App.css';
import FormInput from "./Components/FomInput";
import TodoItem from "./Components/TodoItem";
import React from 'react';


class App extends React.Component {
  state = {
    todoArray: [
      {
        id: 1,
        acara: "makan malam",
      },
      {
        id: 2,
        acara: "makan siang",
      },
      {
        id: 3,
        acara: "makan pagi",
      },
    ],
  };

  delItem = (id) =>{
    this.setState({
      todoArray : this.state.todoArray.filter(item => item.id !== id)
    })
  }

  addItem = (data )=>{
    const id = this.state.todoArray.length
    const newData = {
      id  : id +1,
      acara : data
    }
    this.setState({
      todoArray : [...this.state.todoArray , newData ]
    })


  }



  render() {
    return (
      <div className="app">
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ width: 130, height: 130 }}
          />
        </div>
        <h2 style={{ textAlign: "center", color: "white" }}>TodoLIst React</h2>
        <div className="list">
          {this.state.todoArray.map((item) => (
            <TodoItem key={item.id} todoname={item} del={this.delItem}/>
          ))}
        </div>
        <FormInput add={this.addItem} />
      </div>
    );
  }
}


export default App;

