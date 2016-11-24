#!/usr/bin/env node

var player = require('chromecast-player')();
var Myo = require('myo');

Myo.connect();

Myo.on('status', function(data){
	console.log("Myo status: "+JSON.stringify(data));
});

Myo.on("connected", function(data, timestamp) {
  console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
});

Myo.on('fist', function(){
	player.attach(function(err, p) {
				p.pause();
			});
        console.log('chromecast is paused');
});

Myo.on('fingers_spread', function(){
    player.attach(function(err, p) {
				p.play();
			});
        console.log('chromecast is playing');
});
