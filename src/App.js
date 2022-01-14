import logo from './logo.svg';
import './style/App.css';
import reactDom from 'react-dom';
import About from './components/About';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Interface from './components/Interface';
import Navvy from './Navbar';
import {Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Navvy/>
    <Route exact path="/Interface" component={Interface}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Tech" component={Tech}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/" component={Home}/>


    </>
  );
}

export default App;
