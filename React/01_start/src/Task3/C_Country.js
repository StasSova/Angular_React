import React, { PureComponent } from "react";

class C_Country extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <h2>Country:</h2>
        <p>Ukraine</p>
      </div>
    );
  }
}

export default C_Country;
