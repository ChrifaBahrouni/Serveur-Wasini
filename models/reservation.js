const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const ReservationSchema = new mongoose.Schema({
   
    Publication_Id: {
        type: ObjectId,
        ref: "Post"
    },
  
    reserveBy : { 
        type : ObjectId , 
        ref :'Voyageur'
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