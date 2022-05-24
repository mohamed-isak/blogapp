import { Link } from "react-router-dom";

const Navbar = () => {

  
  
    return (  
     
      <nav className="navbar">
      <h1>The Mohamed Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
            color:"white",
            borderRadius:"8px",
            backgroundColor: "#f1356d"
        }}>New Blog</Link>
      </div>
      </nav>

    );
}
 
export default Navbar;