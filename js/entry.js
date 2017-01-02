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

exports.entryModule = Entry;
