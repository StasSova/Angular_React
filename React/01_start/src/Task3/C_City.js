import React, { PureComponent } from "react";

class C_City extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <h2>City:</h2>
        <p>Odessa</p>
      </div>
    );
  }
}

export default C_City;
