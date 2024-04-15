import React, { PureComponent } from "react";

class CreateComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      content: "",
      isAuthorCorrect: false,
    };
  }

  validateAuthor = () => {
    this.setState({ isAuthorCorrect: this.state.author.length >= 2 });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ author: "", content: "" });
  };

  render() {
    const { author, content } = this.state;

    return (
      <div>
        <h2>Create Comment</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              style={{
                borderColor: this.state.isAuthorCorrect ? "black" : "red",
              }}
              id="author"
              onBlur={this.validateAuthor}
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateComment;
