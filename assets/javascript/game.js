

var options = { "Naruto", "Sasuke", "Jiraiya", "Sakura", "Kurama", "Orochimaro", "Minato", "kakashi"};
var computerPick = options[Math.floor(Math.random() * options.length)];

console.log(computerPick);


var wins = 0;
var currentWord = [];
var triesRem = 15;
var letter = [];
var picks;
var input;