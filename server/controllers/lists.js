'use strict';

var List = require('../models/list');

exports.add = function(req, res){
  List.add(req.body.list, req.user, function(err, list){
    if(list){
      res.send(200).end();
    }else{
      res.send(400).end();
    }
  });
};
