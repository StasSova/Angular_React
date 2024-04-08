import React, { PureComponent } from "react";

class C_Genre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <h2>Genre:</h2>
        <p>Klasnyi</p>
      </div>
    );
  }
}

export default C_Genre;
