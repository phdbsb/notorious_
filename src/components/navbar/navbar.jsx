import './navbar.css';
import { FaWallet } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav>
            <h2>Notorious</h2>
            <ul>
                <li><a href="#rynh">Browse</a></li>
                <li><a href="#ytt">About Us</a></li>
                <li><a href="#jgjyg">FAQ</a></li>
            </ul>
            <div className="inputUser">
                <input type="text" placeholder="Search artwork" className="user"></input>
                <div className="user">
                    <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" alt='logo_user' className="userItem"/>
                    <h3 className="userItem">Anon</h3>
                    <FaWallet size="1.5em" className="wallet"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;