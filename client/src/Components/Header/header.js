import React from 'react';
import lol_bg from './image/header.jpg'


function Header() {
  return (
    <div className="masthead" style={styles}>
    <header className="masthead text-center text-white" style={{opacity: 0.8}}>
    
    <div className="masthead-content" >
      <div className="container">
        <h1 className="masthead-heading mb-0">Tori's Sight Words</h1>
        <h2 className="masthead-subheading mb-0">Parent Directed Learning Plan</h2>
        <a href="#wordForm" className="btn btn-primary btn-xl rounded-pill mt-5">View More</a>
    
      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>

  </header>
  </div>
  );
}


const styles={
  "backgroundImage": `url("${lol_bg}")`,
  "backgroundSize": "cover",
  height: "100%",
}

export default Header;
