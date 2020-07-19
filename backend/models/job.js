const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var jobSchema = new Schema({
    Position: {
        type: String
    },
    Industry: {
        type: String
    },
    Description: {
        type: String
    }

},
    {
        collection: "jobs"
    })

module.exports = mongoose.model('Jobs', jobSchema)