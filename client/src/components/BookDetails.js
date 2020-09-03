import React from "react";
import Axios from "axios";

class BookDetails extends React.Component {
  deleteBook = (id) => {
    Axios.delete(`/books/${id}`);
  };

  render() {
    const { name, author, _id } = this.props;

    return (
      <>
        <form
          className="d-flex justify-end"
          onSubmit={() => this.deleteBook(_id)}
        >
          <button className="danger">Delete</button>
        </form>
        <h2>{name}</h2>
        <p>
          <b>Author:</b> {author}
        </p>
        <p>
          <b>BookID:</b> {_id}
        </p>
      </>
    );
  }
}

export default BookDetails;
