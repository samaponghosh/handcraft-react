
import './App.css';
import './css/bootstrap.min.css';
import './css/tiny-slider.css';

import './js/custom.js';
// import './js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import Home from './components/Home.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import Contact from './components/Contact.js';
import Cart from './components/Cart.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/handcraft-react/" element={<Home/>}/>
          <Route exact path="/aboutus" element={<About/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
