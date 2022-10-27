const VoyageurModel =require("../models/Voyageur")
exports.create= (req , res)=>{
    const p = new VoyageurModel(req.body)
    p.save()
    .then(resultat=>{
       res.send(resultat) 
    })
    
}
exports.update= (req , res)=>{
    var id = req.params.id;
    VoyageurModel.updateOne({_id : id} , req.body)
    .then((result)=>{
        res.send(result)
    })
  

}