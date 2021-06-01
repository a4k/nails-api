/**
 * Master.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: 'string',
    phone: 'string',
    image: 'string',
    description: 'string',
    services: {
      collection:'service',
      via: 'master',
      through: 'masterService'
    },
    calendar: {
      collection:'masterCalendar',
      via: 'master',
    }
  },
};

