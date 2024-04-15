import React, { PureComponent } from "react";

class Form1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      textArea: "",
      email: "",
      lang_ua: false,
      lang_en: false,
      selectedOption: "option1",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleCheckChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="user name"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={this.handleChange}
        />

        <input
          type="checkbox"
          name="lang_ua"
          id="lang_ua"
          checked={this.state.lang_ua}
          onChange={this.handleCheckChange}
        />
        <label htmlFor="lang_ua">UA</label>
        <input
          type="checkbox"
          name="lang_en"
          id="lang_en"
          checked={this.state.lang_en}
          onChange={this.handleCheckChange}
        />
        <label htmlFor="lang_en">EN</label>

        <textarea
          cols="30"
          rows="10"
          name="textArea"
          value={this.state.textArea}
          onChange={this.handleChange}
        ></textarea>

        <select
          name="selectedOption"
          value={this.state.selectedOption}
          onChange={this.handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <p>{this.state.userName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.textArea}</p>

        <p>{this.state.selectedOption}</p>
      </>
    );
  }
}

export default Form1;
