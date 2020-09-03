import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'

class BookList extends React.Component {

    state = { books: [] }

    async componentDidMount() {
        const books = await axios.get('/books')
        if (books.data) {
            this.setState({ books: books })
        }
    }

    render() {
        return (
            <div>
                <h2>Book List</h2>
                {this.state.books.map((book, i) => {
                    return (
                        <Card>
                            <Card.Body>
                                <p><b>Name:</b> {book.name} <b>Author:</b> {book.author} <b>BookID:</b> {book.bookid}</p>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default BookList;