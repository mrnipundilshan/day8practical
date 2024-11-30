import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
         <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contact' element={<Contactus></Contactus>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
