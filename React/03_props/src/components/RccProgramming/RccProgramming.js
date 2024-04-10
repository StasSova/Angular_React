import React, { PureComponent } from "react";

class RccProgramming extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <p>
          {this.props.title}: {this.props.price}
        </p>
      </>
    );
  }
}

export default RccProgramming;
