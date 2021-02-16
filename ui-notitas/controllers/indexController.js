let db = require('../database/models')

let indexController = {
    'home' : function(req, res){ 
        db.Nota.findAll()
        .then(function(notas){
        return res.render('index', {notas: notas})
            })
},
    'crear' : function(req,res){
        db.Nota.create({
            titulo: req.body.titulo ,
            texto: req.body.texto,  
      })
      res.redirect('index')
    },
    'delete': function(req,res){
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
}
module.exports = indexController