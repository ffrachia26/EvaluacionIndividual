let db = require('../database/models')


let detailController = {
    'edit': function(req,res){
        db.Nota.findByPk(req.params.id)
        .then(function(nota){
            res.render('detail', {nota: nota})
        })
    },
    'actulizar' : function(req,res){
        db.Nota.update({
            titulo: req.body.titulo ,
            texto: req.body.texto,  
      },{
          where: {
              id: req.params.id
          }
      })
      res.redirect('/')
    }
}

module.exports = detailController