var arg = process.argv.slice(2);
var output = [];

function pigLatin(arg) {
    arg.forEach(function(word) {
        var first = word[0];
        var wordRest = word.slice(1);
        var pigLatin = wordRest + first + 'ay';
        output.push(pigLatin);
    })
    return output.join(' ');
}

console.log(pigLatin(arg))