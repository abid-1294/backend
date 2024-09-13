const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://abidulislammehrab1294:animal12345@animalfilter.rmiho.mongodb.net/blog?retryWrites=true&w=majority&appName=animalFilter').then(() => console.log('MongoDB Connected!'));
}
module.exports = dbConnection