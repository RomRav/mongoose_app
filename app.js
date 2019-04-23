const app = require('express')();
const bodyParser = require('body-parser');

//importation du model restaurant
const RestaurantModel = require('./models/restaurants.model');

//import du model todo
const TodoModel = require('./models/todo.model');
const todoRoutes = require('./routes/todo.route');

//Utilisation de bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importation des routes
app.use('/task', todoRoutes);



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