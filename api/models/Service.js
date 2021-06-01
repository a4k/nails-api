/**
 * Service.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: 'string',
    price: 'number',
    time: 'string',
    masters: {
      collection: 'master',
      via: 'service',
      through: 'masterService',
    },
  },
};

