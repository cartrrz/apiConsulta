/**
 * MilitanteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  BuscarCI: (req,res)=>{
    sails.log.debug(req.query);
    var ci=req.query.documento;
    Militante.find({documento: ci})
    .then(militante => {
      return res.json(militante)
    })
    .catch(error =>{
      return res.serverError(error)
    });
  },
  getID: (req,res) => {
    //sails.log.debug(req.allParams())
    sails.log.debug(req.param('id'))
    var myid=req.param('id');
    //sails.log.debug(myid)
    Militante.find({id: myid})
    .then(militante => {
      return res.json(militante)
    })
    .catch(error =>{
      return res.serverError(error)
    });

  },

  crear: (req,res)=>{
    
    var mymilitante = req.body
    Militante.create(mymilitante)
    .then(militante=>{
      sails.log.debug(militante)
      return res.json(militante);
    })
    .catch(error=>{
      return res.serverError(error)
    })
  }
};

