const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";


function listAllBooks(){
    const listAllBooksAPI = async () => {
        await axios.get(`${BASE_URL}/books`).then((res) => console.log(res.data));
    };
    listAllBooksAPI();
};

function getBookById(id){
    const getBookByIdAPI = async (id) => {
        await axios
          .get(`${BASE_URL}/books/${id}`)
          .then((res) => console.log(res.data));
    };
    getBookByIdAPI(id);
};

function insertBook(id,title,author){
    const insertBookAPI = async (id, title, author) => {
        await axios
          .post(`${BASE_URL}/books`, {
            id,
            title,
            author,
          })
          .then((res) => console.log(res.data));
    };
    insertBookAPI(id, title, author);
};

function deleteBookById (id) {
    const deleteBookByIdAPI = async (id) => {
      await axios
        .delete(`${BASE_URL}/books/${id}`)
        .then((res) => console.log(res.data));
    };
    deleteBookByIdAPI(id);
};

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == "list") listAllBooks();
else if (command == "insert") insertBook(process.argv[0], process.argv[1], process.argv[2]);
else if (command == "get") getBookById(process.argv[0]);
else if (command == "delete") deleteBookById(process.argv[0]);