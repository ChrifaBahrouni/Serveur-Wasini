const express = require('express');
const router = express.Router();

const Reservationcontroller =require ('../../controllers/reservation');
router.post('/create',Reservationcontroller.create);//pour créer une  réservation 
router.get('/reservations-data',Reservationcontroller.getAll);//pour avoir la liste  des réservations 
router.post('/delete-reservation',Reservationcontroller.delete);//pour  supprimer une réseravtions 

module.exports = router;