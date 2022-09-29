import './App.css';
import 'normalize.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Todo from './components/Todo'
import BlogList from './components/BlogList';
import { useState, useEffect } from 'react';


const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then(res => res.json())
        .then(data => {
          setBlogs(data);
          setBlogsLoaded(true);
        }).catch(error => {
          console.log(error);
        })
    }, 1000)

  }, [])
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <div className='flex-row'>
          <Counter></Counter>
          <Timer></Timer>
        </div>
        <Todo></Todo>
        <BlogList blogs={blogs} blogsLoaded={blogsLoaded}>
        </BlogList>
      </div>
    </div>

  );
}

export default App;
