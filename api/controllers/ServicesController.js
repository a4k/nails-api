/**
 * FilmsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: function (req, res) {

    sails.models.service.find().populate('masters').exec((err, services) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!services) {
        return res.notFound();
      }

      return res.ok(services);
    });

  },

};

