const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    nameProject : String,
    descProject : String,
    tasks :[{
        type : Schema.Types.ObjectId,
        ref: 'task'
    }]
})

const project = mongoose.model('project', projectSchema);

module.exports = project;