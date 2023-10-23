const { toDotScript } = require("automata.js/src/dot-converter");

var dfa = dfaParser.parseToDFA();
var nfa = nfaParser.parseToNFA();


$('.dfaResult').html(
    `<p>Type: ${dfa['type']}</p>
    <p>Accept States: ${dfa['acceptStates']}</p>
    <p>Intial State: ${dfa['initialState']}</p>
    <p>Number of States: ${dfa['numOfStates']}</p>
    <!-- <p>Type: ${dfa['type']}</p>
    <p>Type: ${dfa['type']}</p> -->`
);
$('.nfaResult').html(
    `<p>Type: ${nfa['type']}</p>
    <p>Accept States: $ndfa['acceptStates']}</p>
    <p>Intial State: ${nfa['initialState']}</p>
    <p>Number of States: ${nfa['numOfStates']}</p>
    <!-- <p>Type: ${nfa['type']}</p>
    <p>Type: ${nfa['type']}</p> -->`
)
console.log(dfa, nfa);

