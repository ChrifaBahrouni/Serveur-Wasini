const express = require('express')
const router = express.Router();

const chatcontroller=require ('../../controllers/chat');

router.get('/get-chat/:id', chatcontroller.getchat);
router.get('/get-chats', chatcontroller.getChats);
router.get('/get/:id', chatcontroller.readchat);

router.post('/add-chat',chatcontroller. addchat);



module.exports = router;