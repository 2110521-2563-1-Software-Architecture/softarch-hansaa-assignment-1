const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";

var args = process.argv;

const listAllBooks = () => {
  listAllBooksAPI();
};
const getBookById = () => {
  const id = args[1];
  getBookByIdAPI(id);
};
const insertBook = () => {
  const id = args[1];
  const title = args[2];
  const author = args[3];
  insertBookAPI(id, title, author);
};
const deleteBookById = () => {
  const id = args[1];
  deleteBookByIdAPI(id);
};

const listAllBooksAPI = async () => {
  await axios.get(`${BASE_URL}/books`).then((res) => console.log(res.data));
};

const getBookByIdAPI = async (id) => {
  await axios
    .get(`${BASE_URL}/books/${id}`)
    .then((res) => console.log(res.data));
};

const insertBookAPI = async (id, title, author) => {
  await axios
    .post(`${BASE_URL}/books`, {
      id,
      title,
      author,
    })
    .then((res) => console.log(res.data));
};

const deleteBookByIdAPI = async (id) => {
  await axios
    .delete(`${BASE_URL}/books/${id}`)
    .then((res) => console.log(res.data));
};

module.exports = {
  listAllBooks,
  getBookById,
  insertBook,
  deleteBookById,
};
