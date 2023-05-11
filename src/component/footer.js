import React from 'react';
import '../style/footer.css';

function Footer(props) {
  return (
    <footer className='container'>
      <div className='footer-C'>{props.companyName}</div>
      <div className='footer-W' >{props.Workers}</div>
    </footer>
  );
}

export default Footer;




