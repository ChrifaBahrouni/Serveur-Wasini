

const express = require('express');
const router = express.Router();
const Voyageurcontroller=require ('../../controllers/voyageur');


router.post("/create_voyageur", Voyageurcontroller.create);
router.get('/voyageur-data',Voyageurcontroller.read);//route for get all voyageurs
router.post('/voyageur-delete',Voyageurcontroller.deleteUser);//route for delete voyageur 
module.exports = router;