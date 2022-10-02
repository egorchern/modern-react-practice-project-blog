import "./App.css";
import "normalize.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import NotFound from "./pages/NotFound";
import { isClickableInput } from "@testing-library/user-event/dist/utils";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <main className="content">
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
                        <Route path="/createBlog" exact element={
                            <CreateBlog>

                            </CreateBlog>
                        }>

                        </Route>
                        <Route path="*" element={
                            <NotFound>

                            </NotFound>
                        }>

                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
