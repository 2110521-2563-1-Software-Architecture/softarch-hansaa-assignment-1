const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
  },
  title: {
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
 *          - id
 *          - title
 *          - author
 *        properties:
 *          id:
 *            type: integer
 *          title:
 *            type: string
 *          author:
 *            type: string
 *        example:
 *           id: 0
 *           title: BookTitle
 *           author: AuthorName
 */
