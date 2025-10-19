import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordion */}
      <Accordian/>

      {/* Random Color Generator */}
      <RandomColor/>

    </div>
  );
}

export default App;
