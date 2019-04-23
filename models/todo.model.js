//Installation de la bibliotheque mongoose
const mongoose = require('mongoose');

//Connexion à la base de données
mongoose.connect('mongodb://localhost/formation', { useNewUrlParser: true });

//Récupération d'une instance de Schema
const Schema = mongoose.Schema;

//Definir un schema pour les restaurants
const todoSchema = new Schema(
    {
        createdAt: Date,
        taskName: String,
        done: Boolean
    }
);

//Création d'un model à partir du schéma
const TodoModel = mongoose.model('todos', todoSchema);

//Exportaion du model
module.exports = TodoModel;