/* jshint expr:true */
/* global describe, it, before */

'use strict';

var expect    = require('chai').expect,
    Player    = require('../../models/player'),
    dbConnect = require('../../lib/mongodb'),
    //cp        = require('child_process'),
    db        = 'nflTweets';

describe('Answer', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  //beforeEach(function(done){
    //cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      //console.log(stdout, stderr);
      //done();
    //});
  //});

  describe('constructor', function(){
    it('should create a new Player object', function(){
      var p = new Player();
      expect(p).to.be.instanceof(Player);
    });
  });
  describe('.all', function(){
    it('should return all active players', function(done){
      Player.all(function(err, players){
        expect(players).to.be.instanceof(Array);
        console.log('PLAYERS.LENGTH', players.length);
        expect(players).to.be.ok;
        done();
      });
    });
  });
});

