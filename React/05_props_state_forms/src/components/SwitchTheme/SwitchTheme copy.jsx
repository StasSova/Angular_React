import React, { PureComponent } from "react";
import "../../App.css";

class SwitchTheme extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
    };
  }

  handleThemeChange = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
    this.props.onThemeChange(!this.state.darkMode);
  };

  render() {
    return (
      <>
        <div>
          <input
            type="checkbox"
            name="theme"
            id="theme"
            checked={this.state.darkMode}
            onChange={this.handleThemeChange}
          />
          <label htmlFor="theme">Dark Mode</label>
        </div>
      </>
    );
  }
}

export default SwitchTheme;
