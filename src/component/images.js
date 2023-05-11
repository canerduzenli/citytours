import React from "react";
import '../style/image.css'


function Images({ image, title, description }) {
  return (
    <div className="container">
      <div className="flex">
        <img src={image} alt="" />
        <div className="T">{title}</div>
        <div className="content"> {description}</div>
      </div>
    </div>

  );
}

export default Images;