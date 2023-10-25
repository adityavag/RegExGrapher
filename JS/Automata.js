const regParser = require('automata.js');

$('#compile').on('click', () => {
    // $('.dfaResult').remove();
    // $('.nfaResult').remove();
    // $("#dfa-graph-container").remove();
    // $("#nfa-graph-container").remove();
    regExString = regExInput.val();
    dfaParser = new regParser.RegParser(`${regExString}`);
    nfaParser = new regParser.RegParser(`${regExString}`);
    console.log(regExString);
    console.log(typeof (regExString));
    dfa = dfaParser.parseToDFA();
    nfa = nfaParser.parseToNFA();
    console.log(typeof(regExString));
    $('.dfaResult').html(
        `<p>Type: ${dfa['type']}</p>
        <!-- <p>Accept States: ${dfa['acceptStates']}</p> -->
        <p>Intial State: ${dfa['initialState']}</p>
        <p>Number of States: ${dfa['numOfStates']}</p>
        <!-- <p>Type: ${dfa['type']}</p>
        <p>Type: ${dfa['type']}</p> -->`
    );
    $('.nfaResult').html(
        `<p>Type: ${nfa['type']}</p>
        <!-- <p>Accept States: $ndfa['acceptStates']}</p> -->
        <p>Intial State: ${nfa['initialState']}</p>
        <p>Number of S  tates: ${nfa['numOfStates']}</p>
        <!-- <p>Type: ${nfa['type']}</p>
        <p>Type: ${nfa['type']}</p> -->`
    )
    
    instance().then(viz => {
        $("#dfa-graph-container").html(viz.renderSVGElement(dfa.toDotScript()));
        $("#nfa-graph-container").html(viz.renderSVGElement(nfa.toDotScript()));
    });
});


// console.log(dfa)
// console.log(nfa)
// console.log(dfa.toDotScript());

