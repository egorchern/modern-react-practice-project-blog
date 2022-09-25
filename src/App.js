import './App.css';
import 'normalize.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Todo from './components/Todo'

const App = () => {
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <div className='flex-row'>
          <Counter></Counter>
          <Timer></Timer>
        </div>
        <Todo></Todo>

      </div>
    </div>

  );
}

export default App;
