import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";


export default function ImageSlider(){
const images = [
    { url: c},
    { url: b },
    { url: c},
    { url: b },
  ];
  

    return (
      <div>
        <SimpleImageSlider
          width={1550}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={2}
        />
      </div>
    );
  
}