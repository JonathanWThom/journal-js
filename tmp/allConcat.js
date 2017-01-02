var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var length = entry.bodyLength(body);
    var vowels = entry.vowels(body);
    $('#length').text(length);
    $('#vowels').text(vowels);
  });

});
