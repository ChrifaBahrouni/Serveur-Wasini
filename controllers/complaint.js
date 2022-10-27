

const complaintModel = require("../models/complaint");


const Notification = require('../models/notification');



   module.exports.create = async (req, res) =>{
  //ça pour créer un  compalint dans la base
    const newComplaint = new complaintModel({
      //status: req.body.status,
      title : req.body.title , 
      message : req.body.message , 
      body : req.body.body , 
     
    });
    //pour ajouter une notification d'un nouveau événement 
    const newNotifications = new Notification ({
      notif: req.body.notif,
      notif: "A new complaint is added",
  });
 
    try {
       const Complaint = newComplaint.save();//pour enregistrer la data dans le bd 
       newNotifications
       .save()
       return res.status(200).json({message: 'compaint added successfully. Refreshing data...'})
    } catch (err) {//s'il y a d'erreur
      return res.status(400).send(err);
    }
   
  };
  

//read compaints 
    module.exports.readcomplaint = async (req, res) =>{
      complaintModel.find((err, docs) => {
      if (!err) res.send(docs);//retourne toutes les réclamations  s'il n'a pas d'erreur
      else console.log("Error to get data : " + err);//s'il y'a d'erreur retourner erreur
    }).sort({ createdAt: -1 
    
  });//pour ranger de plus récent a mons récent


};

    //pour supprimer  une réclamation 
      module.exports.deletecoplaint = async (req, res) =>{
        complaintModel.deleteOne({ _id: req.body._id}).then(user => {
              if (complaintModel) {
                  return res.status(200).json({message: 'complaint deleted successfully. Refreshing data...', success: true})
              }
          });
      };    
      
//count table  récalmations 
module.exports.countCompaints = async (req, res) =>{
  complaintModel.countDocuments(function (err, count) {
     if (err){
        console.log(err)
      }else{
        console.log("Count :", count)
       
      }
  });

  
};
    
