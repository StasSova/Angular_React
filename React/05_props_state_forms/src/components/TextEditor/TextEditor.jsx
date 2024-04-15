import React, { PureComponent } from "react";

class TextEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      color: "#000000",
      family: "Arial",
      size: 14,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          style={{
            color: this.state.color,
            fontFamily: this.state.family,
            fontSize: this.state.size + "px",
          }}
        />
        <input
          name="color"
          type="color"
          value={this.state.color}
          onChange={this.handleChange}
        />

        <select
          name="family"
          value={this.state.family}
          onChange={this.handleChange}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>

        <input
          name="size"
          type="number"
          min="10"
          max="100"
          value={this.state.size}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextEditor;
