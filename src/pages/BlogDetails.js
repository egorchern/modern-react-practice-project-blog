import {useParams} from "react-router-dom";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";
import {Skeleton} from "@mui/material";

const BlogDetails = () => {
    const {id} = useParams();
    const {
        data: blog,
        dataLoaded,
        errorLoading,
    } = useFetch(`http://localhost:8000/blogs/${id}`, 1000);

    return (
        <article className="blogDetails">
            {errorLoading && <h2>There was an error loading the blog</h2>}
            {!errorLoading && !dataLoaded && (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="clamp(12.5em, 50vh, 31.25em)"
                    animation="wave"
                ></Skeleton>
            )}
            {dataLoaded && !errorLoading && (
                <>
                    <div className="flex-col">
                        <div
                            className="flex-row"
                            style={{
                                justifyContent: "flex-start",
                                width: "100%",
                            }}
                        >
                            <span
                                className="material-icons"
                                style={{
                                    marginRight: "0.1em",
                                    fontSize: "2.2em",
                                }}
                            >
                                account_circle
                            </span>
                            <Link to={`/users/${blog.authorName}`}>
                                <span>{blog.authorName}</span>
                            </Link>
                        </div>

                        <h2>{blog.title}</h2>
                    </div>
                    <p>{blog.body}</p>
                </>
            )}
        </article>
    );
};

export default BlogDetails;
