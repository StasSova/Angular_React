import React, { PureComponent } from "react";

class RccEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      bold: false,
      italic: false,
      underline: false,
      transform: "",
    };
  }

  toggleBold = () => {
    this.setState({ bold: !this.state.bold });
  };

  toggleItalic = () => {
    this.setState({ italic: !this.state.italic });
  };

  toggleUnderline = () => {
    this.setState({ underline: !this.state.underline });
  };

  toggleTransform = () => {
    this.setState((prevState) => ({
      transform:
        prevState.transform === "uppercase" ? "lowercase" : "uppercase",
    }));
  };

  render() {
    return (
      <>
        <div
          className="commands"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <button onClick={this.toggleBold}>B</button>
          <button onClick={this.toggleItalic}>I</button>
          <button onClick={this.toggleUnderline}>U</button>
          <button onClick={this.toggleTransform}>T</button>
        </div>
        <p
          style={{
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecoration: this.state.underline ? "underline" : "",
            textTransform: this.state.transform,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          sint dolorum eos, illo minima laudantium vel est tempora cupiditate
          nobis laborum rem libero amet eveniet officia doloribus cum inventore
          dicta.
        </p>
      </>
    );
  }
}

export default RccEditor;
