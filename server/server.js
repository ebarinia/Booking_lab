const express = require('express');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create-router.js')

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('bookings');
        const bookings = db.collection('bookings');
        const bookingsRouter = createRouter(bookings)
        app.use('/api/bookings', bookingsRouter)
    })
    .catch(console.err)

app.listen(9000, function(){
    console.log(`Listening on port ${ this.address().port }`);
})