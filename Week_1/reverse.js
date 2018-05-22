var arg = process.argv.slice(2) + '';
var arg = arg.split('');
var rev = '';

function reverse(word) {
    for (var i = word.length - 1; i >= 0; i--) {
        rev += word[i]
    }
    var reversedText = rev.replace(/,/g, "\n");
    return reversedText;
}

console.log(reverse(arg));