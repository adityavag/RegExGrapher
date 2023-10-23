const regParser = require('automata.js');

var regExInput = $(".regExInput");
let regExString;

$('#compile').on('click', () => {
    regExString = regExInput.val();
    console.log(regExString);
    console.log(typeof (regExString));
});
var dfaParser = new regParser.RegParser('(a+b)*');
var nfaParser = new regParser.RegParser(`${regExString}`);