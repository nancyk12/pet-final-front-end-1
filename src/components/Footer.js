import { Link } from 'react-router-dom';
import React from "react"

const Footer = () => {
  return (
    
 <footer className='footer'>
        <p>The Footer</p>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </footer>
  );
};


export default Footer;