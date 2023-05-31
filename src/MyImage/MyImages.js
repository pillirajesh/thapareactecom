import React, { useState } from "react";
import "./MyImages.css";

const MyImages = (props) => {
  const [curImage, setCurImage] = useState(0);

  const { images = [{ url: "" }] } = props;
  console.log(images);
  return (
    <div className="flex-box-container">
      <div className="images-list">
        {images.map((curElement, index) => {
          return (
            <figure>
              <img
                src={curElement.url}
                alt={curElement.filename}
                key={curElement.id}
                className="product-image"
                onClick={() => setCurImage(index)}
              />
            </figure>
          );
        })}
      </div>
      <div>
        <img
          src={images[curImage].url}
          alt={images[curImage].filename}
          className="single-image"
        />
      </div>
    </div>
  );
};

export default MyImages;
