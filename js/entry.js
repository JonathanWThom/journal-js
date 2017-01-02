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
