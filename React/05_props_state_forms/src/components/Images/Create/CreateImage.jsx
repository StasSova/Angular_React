import React, { PureComponent } from "react";
import css from "./CreateImage.module.css";

class CreateImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      image: "https://assets.stoumann.dk/img/filter01.jpg",
      blur: 0,
      brightness: 1,
      contrast: 1,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      opacity: 1,
      saturate: 1,
      sepia: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
    this.props.onSubmit(this.state);
  };

  render() {
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
    } = this.state;
    const imageStyle = {
      filter: `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}deg) invert(${invert}) opacity(${opacity}) saturate(${saturate}) sepia(${sepia})`,
    };

    return (
      <div className={css.cont}>
        <div className="imageBlock">
          <img src={image} style={imageStyle} alt="Custom" />
        </div>
        <div className="prop-block">
          <input
            type="text"
            className={css.url}
            placeholder="image url"
            name="image"
            value={image}
            onChange={this.handleChange}
          />

          <div className="propGroup">
            <label htmlFor="blur">Blur:</label>
            <input
              type="range"
              name="blur"
              min="0"
              max="100"
              value={blur}
              onChange={this.handleChange}
            />
            <span>{blur}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="brightness">Brightness:</label>
            <input
              type="range"
              name="brightness"
              min="0"
              max="2"
              step="0.01"
              value={brightness}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{brightness}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="contrast">Contrast:</label>
            <input
              type="range"
              name="contrast"
              min="0"
              max="2"
              step="0.01"
              value={contrast}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{contrast}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="grayscale">Grayscale:</label>
            <input
              type="range"
              name="grayscale"
              min="0"
              max="1"
              step="0.01"
              value={grayscale}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{grayscale}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="hueRotate">Hue Rotate:</label>
            <input
              type="range"
              name="hueRotate"
              min="0"
              max="360"
              value={hueRotate}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{hueRotate}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="invert">Invert:</label>
            <input
              type="range"
              name="invert"
              min="0"
              max="1"
              step="0.01"
              value={invert}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{invert}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="opacity">Opacity:</label>
            <input
              type="range"
              name="opacity"
              min="0"
              max="1"
              step="0.01"
              value={opacity}
              onChange={this.handleChange}
              className="inputRange"
            />
            <span>{opacity}</span>
          </div>
          <div className="propGroup">
            <label htmlFor="saturate">Saturate:</label>
            <span>{saturate}</span>
            <input
              type="range"
              name="saturate"
              min="0"
              max="2"
              step="0.01"
              value={saturate}
              onChange={this.handleChange}
              className="inputRange"
            />
          </div>
          <div className="propGroup">
            <label htmlFor="sepia">Sepia:</label>
            <span>{sepia}</span>
            <input
              type="range"
              name="sepia"
              min="0"
              max="1"
              step="0.01"
              value={sepia}
              onChange={this.handleChange}
              className="inputRange"
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CreateImage;
