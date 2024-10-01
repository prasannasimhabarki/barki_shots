import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Landing'; 
import About from './About'; 
import Upload from './Upload';
import LatestPhotos from './LatestPhotos';


// import SearchResult from './SearchResult';
import './App.css';





const App = () => {


  
 
  

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">Barki_Shots</div>
          
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About</Link></li>
            <li><Link to="/upload">Upload</Link></li>
            <li><Link to="/lp">Latest Photos</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/lp" element={<LatestPhotos />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;