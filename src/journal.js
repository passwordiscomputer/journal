export function Entry(title, content) {
  this.title = title;
  this.content = content;
  this.vowelCount = 0;
  this.consoCount = 0;
}

Entry.prototype.getVowels = function() {
  this.vowelCount = this.content.match(/[aeiou]/gi).length;
  return this.vowelCount;
};

Entry.prototype.getConso = function() {
  this.consoCount = this.content.match(/[^aeiou\s]/gi).length;
  return this.consoCount;
}

Entry.prototype.getTeaser = function() {
  var teaser = this.content.split(".")[0];
  teaser = teaser.split(" ").slice(0, 8).join(" ");  
  return teaser;
}
