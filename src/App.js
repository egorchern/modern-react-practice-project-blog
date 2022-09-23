import './App.css';
import 'normalize.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Timer from './components/Timer';

const App = () => {
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        
        <Counter></Counter>
        <Timer></Timer>
      </div>
    </div>

  );
}

export default App;
