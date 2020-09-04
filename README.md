# softarch-hansaa-assignment-1  
  
### รายชื่อสมาชิกในกลุ่ม  
6031035821 Budsakorn Khosagrid  
6030097521 Janejira Aroonnual  
6030090021 Chirapa Peisiripatana  
6031036421 Palmmanee Thapphachaya  
6031038721 Prawsang Chayakulkeeree 

## Contents  
This contains the source code for REST api, client for the REST api, gRPC, and gRPC's client for a book record service. The directories and described below:  
1. /client - This is the client that calls the RESTful APIs
2. /gRPC - Contains both the client and server using gRPC
3. /rest - This is the source code for the RESTful APIs

## Screenshots of Swagger 
![Screenshots of Swagger](https://github.com/2110521-2563-1-Software-Architecture/softarch-hansaa-assignment-1/blob/master/images/swagger1.png?raw=true)

## Source codes of server that provides the same set of functions accessible and client that makes use of the service via these REST APIs.

## Source Code 

#### Client
```
async componentDidMount() {
    const books = await axios.get("/books");
    if (books.data) {
      this.setState({ books: books.data });
    }
  }

getBook = (id) => {
  const book = axios.get("/books/${id}");
  this.setState({selectedBook: book});
}

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

deleteBook = (id) => {
    Axios.delete(`/books/${id}`);
};
```

#### Server
```
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ errors: err });
  }
});

router.post(
  "/",
  [body("name").notEmpty(), body("author").notEmpty()],
  async (req, res) => {
    const book = new Book({
      name: req.body.name,
      author: req.body.author,
    });

    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ errors: err });
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(true);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

module.exports = router;
```

## Comparision between calling the methods based on gRPC and REST API
For RESTful Apis, the clients makes a request to the server by using HTTP protocol. The server then matches the uri given from the client to see which function will be exectuted. The function then returns a response for the client also using the HTTP protocol.

| Functions     | gRPC          | Rest  |
| ------------- |:-------------| :-----|
| List All Books| client.list({}, function (error, books) {printResponse(error, books);});            | axios.get("/books")|
| Get One Book  | client.get({ id: parseInt(id) }, function (error, book) {printResponse(error, book);});          | axios.get("/books/${id}")|
| Add a Book    | client.insert(book, function (error, empty) {printResponse(error, empty);});            | axios.post("/books", {name: bookName,author,})|
| Remove a Book |   client.delete({ id: parseInt(id) }, function (error, empty) {printResponse(error, empty);});              | axios.delete(`/books/${id}`)|

## What are the main differences between REST API and gRPC?

  Overall, the efficiency of gRPC is higher than that of REST due to several differences in their feature implementations such as protocol (HTTP2 vs HTTP1.1), payload(Protobuf vs JSON), API contract (Strict vs Loose)etc. However, for specific cases in which browser support is mandatory or only small payloads are required to be sent through multiple, simultaneous client-server calls, REST outperforms gRPC.

## What is the benefits of introduce interface in front of the gRPC and REST API of the book services?
Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side, e.g. in a table format as shown below.
| Functions     | gRPC          | Rest  |
| ------------- |:-------------| :-----|
| List All Books|node client.js list|node client.js list       |
| Get One Book  |node client.js insert 'id' 'title 'author'|node client.js insert 'id' 'title 'author'       |
| Add a Book    |node client.js getBook 'id'|node client.js getBook 'id'       |
| Remove a Book |node client.js deleteBook 'id'|node client.js deleteBook 'id'       |

## Draw a component diagram representing the book services with and without interfaces.


![component diagram of RestApi with interface](https://github.com/2110521-2563-1-Software-Architecture/softarch-hansaa-assignment-1/blob/master/images/Component%20(4).png)
