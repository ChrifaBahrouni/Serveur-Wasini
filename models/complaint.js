const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const Complaintchema = new mongoose.Schema({

    title: {
        type: String,
        //required: true
    },

    message: {
        type: String,
        // required: true
    },
    _id_Publication: {
        type: ObjectId,
        ref: "Publication"
    },
    // type: {
    //     type: String,
    //   required: true
    // },
    created: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Complaint', Complaintchema);
