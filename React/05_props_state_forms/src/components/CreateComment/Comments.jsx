import React, { PureComponent } from "react";
import CreateComment from "./CreateComment";

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  handleCommentSubmit = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h2>Comments</h2>
        <CreateComment onSubmit={this.handleCommentSubmit} />
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.author}</strong>: {comment.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
