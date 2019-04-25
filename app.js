const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

//importation du model restaurant
const RestaurantModel = require('./models/restaurants.model');
//import du model todo
const TodoModel = require('./models/todo.model');
//import du model user
const UserModel = require('./models/user.model');

const todoRoutes = require('./routes/todo.route');

//Middleware pour la gestion des CORS (permision pour le navigateur d'envoyer une requête à un autre domaine)
app.use(cors());

//Utilisation de bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importation des routes
app.use('/task', todoRoutes);

app.post('/register', (req, res) => {
    let user = new UserModel({
        userName: req.body.userName,
        login: req.body.login,
        password: req.body.password
    });
    user.save((err) => {
        if (err) {
            res.json({ success: false, error: err });
        } else {
            console.log(user);
            res.json({ success: true, data: user });
        }
    });

});

app.get('/todo', (req, res) => {
    TodoModel.find((err, data) => {
        if (err) {
            console.log(err);
            res.json({ err: true, message: ":(" });
        } else {
            res.json(data);
        }
    });
});

app.get('/resto/liste', (req, res) => {
    RestaurantModel.find({ cuisine: 'Italian', borough: 'Bronx' }, 'name cuisine', (err, data) => {
        if (err) {
            console.log(err);
            res.json({ err: true, message: ":(" });
        } else {
            res.json(data);
        }
    });
});

app.get('/', (req, res) => {
    let resto = new RestaurantModel(
        {
            name: 'Tonio\'s deli',
            cuisine: 'Italian',
            borough: 'Queens'
        }
    );
    res.json(resto.save());
});




app.listen(3000);