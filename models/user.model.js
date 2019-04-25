//Installation de la bibliotheque mongoose
const mongoose = require('mongoose');

//Connexion à la base de données
mongoose.connect('mongodb://localhost/formation', { useNewUrlParser: true });

//Récupération d'une instance de Schema
const Schema = mongoose.Schema;

//Definir un schema pour les utilisateurs
const UserSchema = new Schema(
    {
        userName: String,
        password: String,
        login: String

    }
);



//Création d'un model à partir du schéma
const UserModel = mongoose.model('users', UserSchema);

//Exportaion du model
module.exports = UserModel;