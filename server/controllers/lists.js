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

exports.update = function(req, res){
  List.update(req.body.list, function(err, writeResult){
    console.log('WR', writeResult);
    if(writeResult === 1){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.findByUser = function(req, res){
  List.findByUser(req.user._id, function(err, lists){
    if(lists){
      res.send(lists);
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};
