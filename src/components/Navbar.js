

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-heading-container">
                <span className="nav-heading">My practice react blog</span>
            </div>
            
            <ul>
                <a href="/">Home</a>
                <a href="/posts">Posts</a>
            </ul>
        </nav>
    );
}
 
export default Navbar;