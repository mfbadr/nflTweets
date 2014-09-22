'use strict';

//var bcrypt = require('bcrypt'),
    //Mongo  = require('mongodb');

function Player(){
}

Object.defineProperty(Player, 'collection', {
  get: function(){return global.mongodb.collection('players');}
});

Player.all = function(cb){
  Player.collection.find().toArray(cb);
};

//var _id = Mongo.ObjectID(id);
//User.register = function(o, cb){
  //User.collection.findOne({email:o.email}, function(err, user){
    //if(user || o.password.length < 3){return cb();}
    //o.password = bcrypt.hashSync(o.password, 10);
    //User.collection.save(o, cb);
  //});
//}

//User.login = function(o, cb){
  //User.collection.findOne({email:o.email}, function(err, user){
    //if(!user){return cb();}
    //var isOk = bcrypt.compareSync(o.password, user.password);
    //if(!isOk){return cb();}
    //cb(null, user);
  //});
//};

module.exports = Player;

