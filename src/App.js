import "./App.css";
import "normalize.css";
import Navbar from "./components/Navbar";
import Home from "./Home";
import BlogList from "./components/BlogList";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/blogs"
                            element={
                                <BlogList url={"http://localhost:8000/blogs"} />
                            }
                        ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
