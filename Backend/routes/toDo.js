const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

const toDoModel = mongoose.model("toDo", toDoSchema);

module.exports = toDoModel;
