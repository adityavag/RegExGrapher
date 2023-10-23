const regParser = require('automata.js');
const { toDotScript } = require("automata.js/src/dot-converter");
const { instance } = require("@viz-js/viz");

var regExInput = $(".regExInput");
let regExString;

$('#compile').on('click', () => {
    regExString = regExInput.val();
    console.log(regExString);
    console.log(typeof (regExString));
});

var dfaParser = new regParser.RegParser('(a+b)*');
var nfaParser = new regParser.RegParser(`${regExString}`);