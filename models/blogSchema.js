const mongoose = require ('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    created:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("BlogList", blogSchema)