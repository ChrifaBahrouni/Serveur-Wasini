

const express = require('express');
const router = express.Router();
const Voyageurcontroller=require ('../../controllers/voyageur');


router.post("/post-add", Voyageurcontroller.createPost);
router.get('/voyageur-data',Voyageurcontroller.readPost);//route for login event
router.get("/count-voyageur", Voyageurcontroller.countPost);//count numbre post
module.exports = router;