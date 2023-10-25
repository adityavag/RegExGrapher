const { toDotScript } = require("automata.js/src/dot-converter");
const { instance } = require("@viz-js/viz");

var regExInput = $(".regExInput");
var regExString = '';
var dfaParser, nfaParser, dfa, nfa;
