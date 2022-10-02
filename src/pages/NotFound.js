import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry, that page cannot be found</h2>
            <Link to="/">
                To homepage
            </Link>
        </div>
    );
}
 
export default NotFound;