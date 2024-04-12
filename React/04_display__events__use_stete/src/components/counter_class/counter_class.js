import React, { PureComponent } from "react";

class Counter_class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  minus() {
    if (this.state.count === 0) return;
    this.setState({ count: this.state.count - 1 });
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  handleClick() {
    console.log(++this.state.count);
  }

  render() {
    return (
      <div
        className="cart-style"
        style={{
          boxSizing: "border-box",
          border: "1px solid #ddd",
          padding: "10px",
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "12px",
        }}
      >
        <button onClick={() => this.minus()}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.plus()}>+</button>
      </div>
    );
  }
}

export default Counter_class;
