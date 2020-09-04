import React from "react";
import axios from "axios";
import BookDetails from "./BookDetails";

class BookList extends React.Component {
  state = { books: [], selectedBook: null };

  async componentDidMount() {
    const books = await axios.get("/books");
    if (books.data) {
      this.setState({ books: books.data });
    }
  }

  select = (book) => {
    console.log(book);
    this.setState({ selectedBook: book });
  };

  render() {
    const { books, selectedBook } = this.state;
    return (
      <div className="d-flex mt-large3">
        <div style={{ flex: "50%" }}>
          <h2>Book List</h2>
          {books.map((book, i) => {
            return (
              <div
                className="pt-large2 pb-large2 entry"
                onClick={() => this.select(book)}
                key={`book${i}`}
              >
                <div class="d-flex align-center">
                  <b className="pr-large1" style={{ display: "inline-block" }}>
                    {book.title}
                  </b>
                  <div style={{ color: "#898989" }} class="pr-large2">
                    Author: {book.author}
                  </div>
                  <span
                    style={{
                      color: "#898989",
                      fontSize: 30,
                    }}
                  >
                    ›
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ flex: "50%" }}>
          <div
            className="card ml-large2"
            style={{ width: "100%", height: "100%" }}
          >
            {selectedBook ? (
              <BookDetails
                title={selectedBook.title}
                author={selectedBook.author}
                id={selectedBook.id}
              />
            ) : (
              <div
                className="d-flex justify-center align-center"
                style={{ width: "100%", height: "100%" }}
              >
                <span style={{ color: "gray" }}>Please Select a book</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
