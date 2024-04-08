import React, { PureComponent } from "react";

class C_Author extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <h2>Author:</h2>
        <p>Sova Stanislav</p>
      </div>
    );
  }
}

export default C_Author;
