const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);

/**
 * @swagger
 *  components:
 *    schemas:
 *      book:
 *        type: object
 *        required:
 *          - name
 *          - author
 *          - borrowed
 *        properties:
 *          name:
 *            type: string
 *          author:
 *            type: string
 *          borrowed:
 *            type: boolean
 *        example:
 *           name: BookName
 *           author: AuthorName
 *           borrowed: false
 */
