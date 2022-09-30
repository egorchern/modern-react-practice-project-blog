import Blog from "./Blog";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Skeleton} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import {useState, useEffect} from "react";
import useFetch from "../useFetch.js";

const BlogList = ({url}) => {
    const darkTheme = createTheme({palette: {mode: "dark"}});
    const itemsPerPage = 3;
    const [currentBlogs, setCurrentBlogs] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const {data: blogs, dataLoaded: blogsLoaded, errorLoading} = useFetch(url);

    useEffect(() => {
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
        setCurrentBlogs(
            blogs.slice(
                itemsPerPage * (pageNumber - 1),
                pageNumber * itemsPerPage
            )
        );
    }, [blogs, pageNumber]);

    const handlePageChange = (ev, value) => {
        setPageNumber(value);
    };

    return (
        <div className="flex-col blogs-container margin-small">
            {errorLoading && (
                <h2 style={{margin: "auto", textAlign: "center"}}>
                    There was an error loading the blogs!
                </h2>
            )}
            {!blogsLoaded && !errorLoading && (
                <div>
                    <h2 style={{margin: "auto", textAlign: "center"}}>
                        Loading
                    </h2>
                </div>
            )}
            {blogsLoaded && !errorLoading && (
                <ThemeProvider theme={darkTheme}>
                    {currentBlogs &&
                        currentBlogs.map((blog, index) => {
                            return (
                                <Blog
                                    title={blog.title}
                                    body={blog.body}
                                    author={blog.authorName}
                                    key={blog.id}
                                ></Blog>
                            );
                        })}
                    <Pagination
                        count={pageCount}
                        page={pageNumber}
                        onChange={handlePageChange}
                    ></Pagination>
                </ThemeProvider>
            )}
        </div>
    );
};

export default BlogList;
