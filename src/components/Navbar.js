import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-heading-container">
                <span className="nav-heading">My react practice</span>
            </div>
            
            <ul>
                <Link to="/">
                    Todo
                </Link>
                <Link to="/blogs">
                    Blogs
                </Link>
                <Link to="/createBlog">
                    Create blog
                </Link>
            </ul>
        </nav>
    );
}
 
export default Navbar;