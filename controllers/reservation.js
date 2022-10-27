
const Reservation = require('../models/reservation');
exports.getAll = (req, res) => {

    Reservation.find({})
        .then(resultat => {
            res.send(resultat)
        }

        )

}

exports.create = (req, res) => {
    const p = new Reservation(req.body)
    p.save()
        .then(resultat => {
            res.send(resultat)
        })
}

exports.update = (req, res) => {
    var id = req.params.id;
    Reservation.updateOne({ _id: id }, req.body)
        .then((result) => {
            res.send(result)
        })

}

exports.delete = (req, res) => {

  Réservation.remove({ _id: req.body._id })
        .then((result) => {
            res.send(result)
        })

}
exports.getById = (req, res) => {
    var id = req.params.id;
    Réservation.findOne({ _id: id })
        .then((result) => {
            res.send(result);
        })
}
//group  By  _id publication and sender  
exports.getByPublication_sender = (req, res) => {
  var id = req.params.id;
  Réservation.findOne({ _id: id })
      .then((result) => {
          res.send(result);
      })
} 