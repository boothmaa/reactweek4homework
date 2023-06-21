import logo from './logo.svg';
import './App.css';
import Section from "./weather";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <Section/>
    </div>
  );
}

export default App;
