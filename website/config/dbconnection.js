const mongoose = require('mongoose');
// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
const connectionString = 'mongodb://localhost/mlhDB';
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
