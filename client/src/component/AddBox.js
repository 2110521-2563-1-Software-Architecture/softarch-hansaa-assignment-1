import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios'

class AddBox extends React.Component {
    state = {
        name: '',
        author: ''
      }

    // async componentDidMount() {
    //     const books = await axios.post('/books', { name: this.state.name, author:this.state.author })
    //     if (books.data) {
    //         this.setState({ books: books })
    //     }
    // }
    // handleSubmit(){
    //     const books = await axios.post('/books', { name: this.state.name, author:this.state.author })
    // }

    render() {
        return (
            <Form>
                <h2>Add New Book</h2>
            <Form.Group as={Row} controlId="bookName">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder="Book Name" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} controlId="Author">
              <Form.Label column sm={2}>
                Author
              </Form.Label>
              <Col sm={10}>
                <Form.Control placeholder="Author" />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Add</Button>
              </Col>
            </Form.Group>
          </Form>
        )
    }
}

export default AddBox;