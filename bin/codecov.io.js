#!/usr/bin/env node
var sendToCodeCov = require('../lib/sendToCodeCov.io');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';

process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    sendToCodeCov(input, function(err) {
      if (err) {
        throw err;
      }
    });
});
