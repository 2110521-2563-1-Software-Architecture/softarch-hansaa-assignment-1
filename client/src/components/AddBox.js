import React from "react";
import axios from "axios";
import { isEmpty } from "lodash";

class AddBox extends React.Component {
  state = {
    bookName: "",
    author: "",
  };

  submit = (e) => {
    const { bookName, author } = this.state;
    axios
      .post("/books", {
        name: bookName,
        author,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { bookName, author } = this.state;
    return (
      <div className="card mt-large3">
        <form onSubmit={(e) => this.submit(e)}>
          <h2 class="pb-large1">Add New Book</h2>
          <div class="pb-large2">
            <label class="pb-large1 d-block">Name</label>
            <input
              value={bookName}
              onChange={(e) => this.setState({ bookName: e.target.value })}
              placeholder="Book Name"
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

          <button type="submit" disabled={isEmpty(bookName) || isEmpty(author)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBox;
