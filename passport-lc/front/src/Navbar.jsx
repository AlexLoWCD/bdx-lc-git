import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/visitor">Visitor</Link>
        </li>
        <li>
          <Link to="/connected">Connected</Link>
        </li>
      </ul>
    </div>
   );
}
 
export default Navbar;