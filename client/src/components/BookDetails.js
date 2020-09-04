import React from "react";
import Axios from "axios";

class BookDetails extends React.Component {
  deleteBook = (id) => {
    Axios.delete(`/books/${id}`);
  };

  render() {
    const { title, author, id } = this.props;

    return (
      <>
        <form
          className="d-flex justify-end"
          onSubmit={() => this.deleteBook(id)}
        >
          <button className="danger">Delete</button>
        </form>
        <h2>{title}</h2>
        <p>
          <b>Author:</b> {author}
        </p>
        <p>
          <b>BookID:</b> {id}
        </p>
      </>
    );
  }
}

export default BookDetails;
