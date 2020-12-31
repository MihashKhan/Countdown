import React from 'react';
import logo from '../simi.jpg'; // Tell webpack this JS file uses this image
import logo2 from '../arsath.jpg'; 
import logo3 from '../shifa2.jpg'; 
 // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return(<div>
  <img src={logo} alt="Logo" width="300" height="300"   />
  <img src={logo2} alt="Logo2" width="300" height="300"   /> 
  <img src={logo3} alt="Logo2" width="300" height="300"   /> 
  </div> );
}

export default Header;