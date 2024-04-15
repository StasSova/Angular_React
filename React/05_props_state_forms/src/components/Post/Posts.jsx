import React, { PureComponent } from "react";

class Posts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      comments: [],
      loading: Boolean,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const URL = "https://jsonplaceholder.typicode.com/";
    setTimeout(
      () =>
        fetch(URL + "posts")
          .then((data) => data.json())
          .then((data) => this.setState({ posts: data, loading: false })),
      2000
    );

    this.timerId = setInterval(() => {
      fetch(URL + "comments")
        .then((data) => data.json())
        .then((data) => this.setState({ comments: data }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    let content = "",
      contentComments = "";
    if (this.state.loading === true) {
      content = <h1>Loading</h1>;
    } else {
      content = this.state.posts.map((el) => (
        <div className="item" key={el.id}>
          <p>{el.title}</p>
        </div>
      ));
      contentComments = this.state.comments.map((el) => (
        <div className="comm" key={el.id}>
          <p>{el.name}</p>
        </div>
      ));
    }
    return (
      <>
        <div className="items">{content}</div>
        <hr />
        <div className="comments">{contentComments}</div>
      </>
    );
  }
}

export default Posts;
