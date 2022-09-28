import ReactDOM from 'react-dom/client';
import './App.css';
import Layout from './components/layout/layout';


function Main() {
    return (
        <header className="head">
            <Layout />
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);