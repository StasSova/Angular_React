import React, { PureComponent } from "react";

class C_Image extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <h2>Image:</h2>
        <div className="flex">
          <img src="/src/img/1.jpg" alt="odessa" />
          <img src="src/img/2.jpg" alt="odessa" />
          <img src="/img/3.jpg" alt="odessa" />
          <img src="/img/4.jpg" alt="odessa" />
        </div>
      </div>
    );
  }
}

export default C_Image;
