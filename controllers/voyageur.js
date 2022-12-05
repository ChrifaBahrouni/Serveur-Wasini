const VoyageurModel =require("../models/Voyageur")
const Notification = require('../models/notification');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validateUpdateUserInput = require('../validation/updateUser');
const { photo } = require("./users");
// exports.create= (req , res)=>{
//     const p = new VoyageurModel(req.body)
//     p.save()
//     .then(resultat=>{
//        res.send(resultat) 
//     })
    
// }
exports.create = async (req, res) =>{
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    VoyageurModel.findOne({ Email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ Email: 'Email already exists' });
        } else {
            const newUser = new VoyageurModel({
                UserName: req.body.UserName,
                Email: req.body.email,
                Password: req.body.password,
                PhoneNumber: req.body.PhoneNumber , 
                photo: req.body.photo  , 
                site_web: req.body.site_web  , 
                WhatsApp: req.body.WhatsApp  , 
                facebook: req.body.facebook , 
                instagram: req.body.instagram, 
                cin: req.body.cin  ,
                photo_billet: req.body.photo_billet  , 
                num_passport: req.body.num_passport 
               
            });
            //pour ajouter une notification d'un nouveau événement 
    const newNotifications = new Notification ({
        notif: req.body.notif,
        notif: "A new  Voyageur is added",
    });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.Password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.Password = hash;
                    newUser
                        .save()
                        .then(user => {
                            return res.status(200).json({message: 'Voyageur  added successfully. Refreshing data...'})
                        }).catch(err => console.log(err));
                });
                newNotifications
    .save()

            });
        }
    });
};
exports.update= (req , res)=>{
    var id = req.params.id;
    VoyageurModel.updateOne({_id : id} , req.body)
    .then((result)=>{
        res.send(result)
    })
  

}

//pour lister users

    exports.read = async (req, res) =>{
        User.find({__t:'Voyageur'}).select(['-password']).then(user => {
            if (user) {
                return res.status(200).send(user);
            }
        });
    };
    //pour supprimer voyageur
    
       exports.deleteUser = async (req, res) =>{
        User.deleteOne({ _id: req.body._id}).then(user => {
            if (user) {
                return res.status(200).json({message: ' Voyageur deleted successfully. Refreshing data...', success: true})
            }
        });
    };