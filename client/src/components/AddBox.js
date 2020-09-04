import React from "react";
import axios from "axios";
import { isEmpty } from "lodash";

class AddBox extends React.Component {
  state = {
    bookTitle: "",
    author: "",
    id: "",
  };

  submit = () => {
    const { id, bookTitle, author } = this.state;
    axios
      .post("/books", {
        id,
        title: bookTitle,
        author,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { bookTitle, author, id } = this.state;
    return (
      <div className="card mt-large3">
        <form onSubmit={(e) => this.submit(e)}>
          <h2 class="pb-large1">Add New Book</h2>
          <div class="pb-large2">
            <label class="pb-large1 d-block">ID</label>
            <input
              value={id}
              onChange={(e) => this.setState({ id: e.target.value })}
              placeholder="Book ID"
              type="number"
            />
          </div>
          <div class="pb-large2">
            <label class="pb-large1 d-block">Title</label>
            <input
              value={bookTitle}
              onChange={(e) => this.setState({ bookTitle: e.target.value })}
              placeholder="Book Title"
            />
          </div>
          <div class="pb-large2">
            <label class="pb-large1 d-block">Author</label>
            <input
              value={author}
              onChange={(e) => this.setState({ author: e.target.value })}
              placeholder="Author"
            />
          </div>

          <button
            type="submit"
            disabled={isEmpty(bookTitle) || isEmpty(author)}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBox;
