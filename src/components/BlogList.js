import BlogPreview from "./BlogPreview";
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
    const [curPageLoaded, setCurPageLoaded] = useState(false);
    const simulaterPageLoadTime = 500;
    const {
        data: blogs,
        dataLoaded: blogsLoaded,
        errorLoading,
    } = useFetch(url, 1000);

    useEffect(() => {
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
        setCurrentBlogs(
            blogs.slice(
                itemsPerPage * (pageNumber - 1),
                pageNumber * itemsPerPage
            )
        );
        setCurPageLoaded(false);
        const pageLoadTm = setTimeout(() => {
            setCurPageLoaded(true);
        }, simulaterPageLoadTime);

        return () => {
            clearTimeout(pageLoadTm);
        };
    }, [blogs, pageNumber]);

    const handlePageChange = (ev, value) => {
        setPageNumber(value);
    };

    return (
        <div className="flex-col blogs-container padding-small">
            {(() => {
                if (errorLoading) {
                    return (
                        <h2 style={{margin: "auto", textAlign: "center"}}>
                            There was an error loading the blogs!
                        </h2>
                    );
                } else if (!curPageLoaded) {
                    return Array.from({length: itemsPerPage}).map(
                        (item, index) => {
                            return (
                                <Skeleton
                                    variant="rectangular"
                                    className="blog"
                                    animation="wave"
                                    key={index}
                                ></Skeleton>
                            );
                        }
                    );
                } else {
                    return (
                        <ThemeProvider theme={darkTheme}>
                            {currentBlogs &&
                                currentBlogs.map((blog, index) => {
                                    return (
                                        <BlogPreview
                                            title={blog.title}
                                            body={`${blog.body.slice(
                                                0,
                                                70
                                            )} ...`}
                                            author={blog.authorName}
                                            id={blog.id}
                                            key={blog.id}
                                        ></BlogPreview>
                                    );
                                })}
                        </ThemeProvider>
                    );
                }
            })()}
            {!errorLoading && (
                <ThemeProvider theme={darkTheme}>
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
