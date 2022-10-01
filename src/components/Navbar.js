import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-heading-container">
                <span className="nav-heading">My practice react blog</span>
            </div>
            
            <ul>
                <Link to="/">
                    Home
                </Link>
                <Link to="/blogs">
                    Blogs
                </Link>
            </ul>
        </nav>
    );
}
 
export default Navbar;