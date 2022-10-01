import "./App.css";
import "normalize.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";

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
                            exact
                        ></Route>
                        <Route
                            path="/blogs"
                            element={<BlogsPage />}
                            exact
                        ></Route>
                        <Route path="/blogs/:id" exact element={
                            <BlogDetails>

                            </BlogDetails>
                        }></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
