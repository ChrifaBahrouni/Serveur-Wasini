const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const ReservationSchema = new mongoose.Schema({
   
    _id_post: {
        type: ObjectId,
        ref: "Post"
    },
  
    _id_voyageur : { 
        type : ObjectId , 
        ref :'Voyageur'
    },
    _id_user : { 
        type : ObjectId , 
        ref :'User'
    },
    valide_reservation: {
        type: Boolean,
        default: false
        
    },
    valide_livraison: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    //expire_at: {type: Date, default: Date.now, expires: 20} //pour effacer la story aprés 20 sec
});

module.exports = mongoose.model("Réservation", ReservationSchema );