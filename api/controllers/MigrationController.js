/**
 * MigrationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  user: function (req, res) {
    sails.models.user.create({
      username: 'test',
      name: 'test',
      token: 'test',
      password: 'test'
    }).fetch().exec((err, data) => {
      if (err) {
        return res.serverError(err);
      }
    });
    return res.ok({status: true});
  },
  category: function (req, res) {
    sails.models.category.create({title: 'All', code: 'all'}).fetch().exec((err, data) => {
      if (err) {
        return res.serverError(err);
      }
    });
    sails.models.category.create({title: 'Meat', code: 'meat'}).fetch().exec((err, data) => {
      if (err) {
        return res.serverError(err);
      }
    });
    sails.models.category.create({title: 'Vegetarian', code: 'vegetarian'}).fetch().exec((err, data) => {
      if (err) {
        return res.serverError(err);
      }
    });
    return res.ok({status: true});
  },

  product: function (req, res) {
    sails.models.category.findOne({code: 'meat'}).then(res => {
      console.log(res);
      return res;
    }).then(category => {
      sails.models.product.create({
        title: 'Cheese',
        description: 'Mozzarella, marinara sauce, fresh basil',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Pepperoni',
        description: 'Double pepperoni, mozzarella, marinara sauce, fresh basil',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'From Russia with Love',
        description: 'Fries, ranch , grilled chicken, marinara sauce, red onions, pickles , mozzarella',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Half Pepperoni Half Cheese',
        description: 'Pepperoni, mozzarella, marinara sauce, fresh basil',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Sausage',
        description: 'Double italian sausage, mozzarella, marinara sauce, fresh basil',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Supreme',
        description: 'Pepperoni, fresh basil, mozzarella, italian sausage, bacon, mushrooms, red onions, black olives, green peppers, marinara sauce',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'The Meats',
        description: 'Pepperoni, ham, italian sausage, mozzarella, bacon, marinara sauce, fresh basil',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Buffalo Chicken',
        description: 'Grilled chicken, buffalo sauce, mozzarella, cheddar, red onions',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.category.findOne({code: 'vegetarian'}).then(res => {
      console.log(res);
      return res;
    }).then(category => {
      sails.models.product.create({
        title: 'Vegan Veggie',
        description: 'Red onions, mushrooms, black olives, marinara sauce, fresh basil, vegan mozzarella , cherry tomatoes, pepper green, bell.',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.product.create({
        title: 'Veggie',
        description: 'Green peppers, cherry tomatoes, mozzarella, ricotta, fresh parsley, mushrooms, black olives, red onions',
        category: category.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    return res.ok({status: true});
  },

  size: function (req, res) {
    sails.models.product.findOne({title: 'Half Pepperoni Half Cheese'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 9,
        price2: 9,
        image: 'half_peproni10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 11,
        price2: 11,
        image: 'half_peproni12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 12,
        price2: 12,
        image: 'half_peproni14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Cheese'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 8,
        price2: 8,
        image: 'cheese10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 9,
        price2: 9,
        image: 'cheese12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 10,
        price2: 10,
        image: 'cheese14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Pepperoni'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'peperoni10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'peperoni12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'peperoni14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'From Russia with Love'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'russia10.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'russia12.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'russia12.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Vegan Veggie'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'veganveggie10.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'veganveggie12.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'veganveggie14.jpeg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Sausage'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 12,
        price2: 11,
        image: 'sausage10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 15,
        price2: 14,
        image: 'sausage12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 17,
        price2: 16,
        image: 'sausage14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Supreme'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'supreme10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'supreme12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'supreme14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'The Meats'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'meats10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'meats12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'meats14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Buffalo Chicken'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'bufalo10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'bufalo12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'bufalo14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    sails.models.product.findOne({title: 'Veggie'}).then(res => {
      console.log(res);
      return res;
    }).then(product => {
      sails.models.size.create({
        title: '10"',
        size: 10,
        price: 11,
        price2: 10,
        image: 'vegie10.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '12"',
        size: 12,
        price: 13,
        price2: 12,
        image: 'vegie12.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
      sails.models.size.create({
        title: '14"',
        size: 14,
        price: 15,
        price2: 14,
        image: 'vegie14.jpg',
        product: product.id
      }).exec((err, data) => {
        if (err) {
          return res.serverError(err);
        }
      });
    });
    return res.ok({status: true});
  },
};

