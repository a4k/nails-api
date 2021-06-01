/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: function (req, res) {
    const username = req.param('username');
    const password = req.param('password');

    sails.models.user.findOne({username, password}).exec((err, user) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!user) {
        return res.notFound();
      }

      return res.ok(user);
    });

  },
  findOne: function (req, res) {
    const id = req.param('id');

    sails.models.user.findOne({id}).exec((err, user) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!user) {
        return res.notFound();
      }

      return res.ok(user);
    });

  },
  update: function (req, res) {
    const username = req.param('username');
    const name = req.param('name');

    sails.models.user.updateOne({username}).set({name}).exec((err, user) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!user) {
        return res.notFound();
      }
      sails.models.user.findOne({username}).exec((err, user) => {
        if (err) {
          switch (err.name) {
            case 'UsageError':
              return res.badRequest(err);
            default:
              return res.serverError(err);
          }
        }

        if (!user) {
          return res.notFound();
        }

        return res.ok(user);
      });
    });

  },
  register: function (req, res) {
    const username = req.param('username');
    const password = req.param('password');
    const name = req.param('name');

    const makeId = (length) => {
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    sails.models.user.findOne({username}).exec((err, user) => {
      if (user) {
        return res.badRequest({});
      }

      let arUser = {
        username: username,
        name: name,
        password: password,
      };
      arUser.token = makeId(24);
      sails.models.user.create(arUser).fetch().exec((err) => {
        if (err) {
          return res.serverError(err);
        }
      }).then(data => {
        return res.ok(data);
      });
    });
    return res.ok({status: false});

  },

};

