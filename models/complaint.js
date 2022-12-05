const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const Complaintchema = new mongoose.Schema({

     _id_user: {
        type: ObjectId,
        ref: "User"
    },
     _id_voyageur: {
        type: ObjectId,
        ref: "Voyageur"
    },
     _id_post: {
        type: ObjectId,
        ref: "Publication"
    },
     
    message: {
        type: String,
        // required: true
    },
   
   
    created: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Complaint', Complaintchema);
