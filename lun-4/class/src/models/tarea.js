const mongoose = require('mongoose');
const { Schema } = mongoose;

const tareaSchema = new Schema({
  title: { type: String, required: true},
  description: {type: String, required: true}
});

//Usamos el metodo model para reutilizar el modelo anterior
module.exports = mongoose.model('tarea', tareaSchema);
