'use strict';

var List = require('../models/list');

exports.add = function(req, res){
  List.add(req.body.list, req.user, function(err, list){
    if(list){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};
