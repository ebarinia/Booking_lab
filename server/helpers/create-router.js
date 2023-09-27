const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (bookings) { 
    const router = express.Router();

    router.get("/", (req, res) => { 
        bookings.find()
        .toArray()
        .then((docs) => {
            res.json(docs);
        })
        .catch((err) => {
            console.error(err);
            res.status(505);
            res.json({ status: 505, error: err})
        });
    });


    router.get("/:id", (req, res) => { 
        const id = req.params.id;
        bookings
        .findOne({ _id: ObjectID(id) })
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {
            console.error(err);
            res.status(505);
            res.json({ status: 505, error: err });
        });
    });

    router.post("/", (req, res) => {
        const data = req.body;
        bookings
        .insertOne(data)
        .then(result => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.error(err);
            res.status(505);
            res.json({ status: 505, error: err });
        });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        bookings
        .deleteOne({ _id: ObjectID(id) })
        .then(() => bookings.find().toArray())
        .then((docs) => {
            res.json(docs)
        })
        .catch((err) => {
            console.error(err);
            res.status(505);
            res.json({ status: 505, error: err});
        });
    });

    return router
}

module.exports = createRouter;