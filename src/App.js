import logo from './logo.svg';
import './App.css';
import Buttons from './Components/Buttons';
import FormInput from "./Components/FomInput";
import TodoItem from "./Components/TodoItem";
function App() {
  return (
    <div className="app">
      <div style={{textAlign:'center'}}>
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ width: 130, height: 130}}
        />
      </div>
      <h2 style={{ textAlign: "center", color:'white' }}>TodoLIst React</h2>
      <TodoItem />
      <FormInput />
    </div>
  );
}

export default App;
