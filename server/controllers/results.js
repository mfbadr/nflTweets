'use strict';

var Result = require('../models/result');

exports.getPlayers = function(req, res){
  Result.getPlayers(req.body.listId, function(err, list){
    res.send(list);
    res.status(200).end();
  });
};

