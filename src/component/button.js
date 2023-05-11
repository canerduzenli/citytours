import React from 'react';
import '../style/button.css'
function ButtonGroup() {
  return (
    <div className='buttons'>
      <button>Contact Us</button>
      <button className="bookingButton" >Book a Tour</button>
    </div>
  );
}

export default ButtonGroup;