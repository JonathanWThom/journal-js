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
