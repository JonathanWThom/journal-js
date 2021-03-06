(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.bodyLength = function(body) {
  var bodyLength = body.trim().split(' ').length;
  return bodyLength;
};

Entry.prototype.vowels = function(body) {
  var vowels = body.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.consonants = function(body) {
  var consonants = body.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return consonants === null ? 0 : consonants.length;
};

Entry.prototype.getTeaser = function(body) {
  var sentences = body.split('.');
  var firstSentence = sentences[0];
  var splitSentence = firstSentence.split(' ');
  var firstEight = [];
  if (splitSentence.length > 8) {
    firstEight = splitSentence.slice(0, 8);
  }
  else {
    firstEight = splitSentence;
  }
  firstEight = firstEight.join(' ');
  return firstEight;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var length = entry.bodyLength(body);
    var vowels = entry.vowels(body);
    var consonants = entry.consonants(body);
    var getTeaser = entry.getTeaser(body);
    $('#length').text('Length: ' + length);
    $('#vowels').text('Number of Vowels: ' + vowels);
    $('#consonants').text('Number of Consonants: ' + consonants);
    $('#getTeaser').text('Teaser: ' + getTeaser);
  });

});

},{"./../js/entry.js":1}]},{},[2]);
