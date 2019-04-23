//Installation de la bibliotheque mongoose
const mongoose = require('mongoose');

//Connexion à la base de données
mongoose.connect('mongodb://localhost/formation', { useNewUrlParser: true });

//Récupération d'une instance de Schema
const Schema = mongoose.Schema;

//Definir un schema pour les restaurants
const restaurantSchema = new Schema(
    {
        name: String,
        cuisine: String,
        borough: String
    }
);

//Création d'un model à partir du schéma
const RestaurantModel = mongoose.model('primer-datas', restaurantSchema);

//Exportaion du model
module.exports = RestaurantModel;