'use strict';

module.exports = function(app) {
    var lobby = require('../controllers/lobbyController');

    app.route('/lobby').get(lobby.poll);
    app.route('/lobby').post(lobby.connect);
    app.route('/lobby/create').post(lobby.create);
};