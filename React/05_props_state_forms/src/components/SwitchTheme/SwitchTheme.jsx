import React, { PureComponent } from "react";
import styles from "./style.module.css";

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
          <label
            htmlFor="toggleTheme"
            title="Toggle theme"
            className={styles.switch}
          >
            <input
              id="toggleTheme"
              name="theme"
              type="checkbox"
              onChange={this.handleThemeChange}
              checked={this.state.darkMode}
            />
            <span
              className={`${styles.slider} ${styles.round} ${styles.toggleTheme}`}
            ></span>
          </label>
        </div>
      </>
    );
  }
}

export default SwitchTheme;
