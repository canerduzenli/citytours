import React from 'react';

import '../style/header.css'

function header() {
  return (
    <div>
      <header>
        <div class="container">
          <div class="title">
            <h1>Home</h1>
          </div>
          <nav class="H-nav">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Tours</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
          <div class="icon one">

          </div>
        </div>
      </header>
    </div>
  )
}

export default header
