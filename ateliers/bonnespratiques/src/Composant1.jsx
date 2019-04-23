import React from 'react';
import './Composant1.css';

const Composant1 = () => {
  return ( 
    <div className="Composant1 container fluid text-red">
      <div className="menu">
        <p> Coucou 1 </p>
        <img src="/images/avatar.jpg" alt="image" />
      </div>

      <p> Coucou 2</p>
    </div>
   );
}
 
export default Composant1;