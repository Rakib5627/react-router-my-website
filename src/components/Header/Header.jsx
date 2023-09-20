import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-white">
            <nav className="flex justify-around items-center bg-green-900 py-2">
                <span className="text-xl font-medium">My Website</span>
                
                <NavLink to="/" style={({isActive}) => {return {fontWeight: isActive ? "bold"  : "",
                 }}}>Home</NavLink>

                <NavLink to="/users" style={({isActive}) => {return {fontWeight: isActive ? "bold"  : "",
                 }}}>Users</NavLink>

                <NavLink to="/posts" style={({isActive}) => {return {fontWeight: isActive ? "bold"  : "",
                 }}}>Posts</NavLink> 

                <NavLink to="/about" style={({isActive}) => {return {fontWeight: isActive ? "bold"  : "",
                 }}}>About</NavLink>
                 
                <NavLink to="/contact" style={({isActive}) => {return {fontWeight: isActive ? "bold"  : "",
                 }}}>Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;