import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from axios;

class AddBox extends React.Component {
    state = {
        name: '',
        author: ''
      }
    addBook = await axios.post('/books',{ name: 'testBookName', author:'testAuthor'});

    handleSubmit = event => {   
        axios.post('/books', { name: this.state.name, author:this.state.author })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Add New Book = new type(arguments);</Card.Title>
                    <Card.Text>
                        <p>Name:</p>
                        <p>Author:</p>
                    </Card.Text>
                    <Button variant="success">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default AddBox;