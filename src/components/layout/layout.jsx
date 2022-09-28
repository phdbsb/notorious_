import './layout.css';
import Navbar from '../navbar/navbar';

const Layout = () => {
    return (
        <div className="container">
            <div className="nav"><Navbar /></div>
            <div className="menu"></div>
            <div className="cards"></div>
        </div>
    );
}

export default Layout;