//import de la bibliotheque express
const express = require('express');

const router = express.Router();
const todoModel = require('../models/todo.model');



//Liste de toutes les tâches
router.get('/', (req, res) => {
    todoModel.find((err, data) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json(data);
        }
    })
});

//Ajout d'une tâche
router.post('/new', (req, res) => {


    //Création d'un model
    let newTask = new todoModel({
        taskName: req.body.taskName,
        done: req.body.done,
        createdAt: new Date(req.body.dateString)
    });

    //Sauvegarde de la tâche
    newTask.save((err) => {
        if (err) {
            res.json({ success: false, error: err });
        } else {
            res.json({ success: true });
        }
    });
});

//Supression d'une tâche
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    todoModel.remove({ _id: req.params.id },
        (err) => {
            if (err) {
                res.json({ success: false, error: err });
            } else {
                res.json({ success: true });
            }
        });
});

router.put('/', (req, res) => {
    console.log(req.body);
    todoModel.updateOne(
        { _id: req.body._id },
        {
            taskName: req.body.taskName,
            done: req.body.done,
            createdAt: new Date(req.body.createdAt)
        },
        (err) => {
            if (err) {
                console.log(err);
                res.json({ success: false, error: err });
            } else {
                res.json({ success: true });
            }

        }
    )
});
module.exports = router;