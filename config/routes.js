/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/migration/user': 'MigrationController.user',
  'get /api/v1/migration/service': 'MigrationController.service',
  'get /api/v1/migration/master': 'MigrationController.master',
  'get /api/v1/migration/size': 'MigrationController.size',
  'get /api/v1/services': 'ServicesController.find',
  'get /api/v1/masters': 'MastersController.find',
  'get /api/v1/users/:id': 'UsersController.findOne',
  'post /api/v1/users/register': {controller: 'UsersController', action: 'register'},
  'post /api/v1/users/login': {controller: 'UsersController', action: 'login'},
  'post /api/v1/users/update': {controller: 'UsersController', action: 'update'},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
