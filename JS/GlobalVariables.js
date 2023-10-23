const regParser = require('automata.js');

var regExInput = $(".regExInput");

var dfaParser = new regParser.RegParser('a+b');
var nfaParser = new regParser.RegParser('a+b');