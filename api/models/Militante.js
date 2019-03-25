/**
 * Militante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    paterno: {
      type: 'string'
    },
    materno: {
      type: 'string'
    },
    domicilio: {
      type: 'string'
    },
    celular: {
      type: 'number'
    },
    documento: {
      type: 'string'
    },
    fecha_nacimiento: {
      type: 'string'
    },

    idMesa: {
      model: 'Mesa'
    }
  },

};

