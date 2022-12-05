
var mongoose= require("mongoose");
const user=require("./User")
//l'héritage nous permet d'eviter le gspillage de la memoire 
const Voyageur = user.discriminator('Voyageur',new mongoose.Schema({  //importer tous les données de annonceur
   
    cin: {
        type: String,
       require: true,
       default : ""
       
    },
    num_passport: {
        type: String,
       require: true,
       default : ""
       
    },
    photo_billet: {
        type: String,
       require: true,
       default : ""
       
    },
    instagram: {
        type: String,
        require: true,
        trim: true ,
        default:""
    },
    facebook: {
        type: String,
        require: true,
        trim: true ,
        default:""
       
    },
    WhatsApp:{
        type:String , 
        require :  true , 
        default : ""
    },
   
    site_web:{
        type:String , 
        require : true , 
        default :""

    }
})
);
module.exports=Voyageur;