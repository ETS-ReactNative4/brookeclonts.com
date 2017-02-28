var {mongoose} = require('../db/mongoose');

var Project = mongoose.model('Project', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    url: {
        type: String,
        required: true,
        default: ''
    },
    img: {
        type: String,
        required: true,
        default: ''
    }
});

module.exports = {Project};