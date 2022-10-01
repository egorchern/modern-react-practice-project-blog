import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    return ( 
        <div>
            <h2>Blog id: {id}</h2>
        </div>
    );
}
 
export default BlogDetails;