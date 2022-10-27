const express = require('express');
const router = express.Router();

const Reservationcontroller =require ('../../controllers/reservation');
//router.post('/create',Reservationcontroller.readStory);//pour créer une  réservation 
//router.get('/reservations-data',Reservationcontroller.getAll);//pour avoir la liste  de demand de réservations 

module.exports = router;