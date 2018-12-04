var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todosSchema = new Schema({
    text: String,
    isDone : Boolean
});

var Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;