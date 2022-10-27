const express = require('express');
const router = express.Router();

const Complaintcontroller=require ('../../controllers/complaint');

router.post('/complaint-add', Complaintcontroller.create);//route for create   complaint 
router.get('/complaint-data',Complaintcontroller.readcomplaint);//route for list  réclmations
router.post('/complaint-delete',Complaintcontroller.deletecoplaint);//route for delete  complaint

module.exports = router;

