import React, { PureComponent } from "react";
import CreateImage from "../Create/CreateImage";
import css from "./Images.module.css";

class Images extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  handleImageSubmit = (imageData) => {
    this.setState((prevState) => ({
      images: [...prevState.images, imageData],
    }));
  };

  render() {
    const { images } = this.state;

    return (
      <div className="container">
        <CreateImage onSubmit={this.handleImageSubmit} />
        <div className={css.imageList}>
          {images.map((imageData, index) => {
            const {
              image,
              blur,
              brightness,
              contrast,
              grayscale,
              hueRotate,
              invert,
              opacity,
              saturate,
              sepia,
            } = imageData;

            const imageStyle = {
              filter: `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}deg) invert(${invert}) opacity(${opacity}) saturate(${saturate}) sepia(${sepia})`,
            };

            return (
              <div className={css.image} key={index}>
                <img
                  src={image}
                  style={imageStyle}
                  alt={`Image ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Images;
