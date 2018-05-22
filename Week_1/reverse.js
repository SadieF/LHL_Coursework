var arg = process.argv.slice(2) + '';

function reverse(word) {
    var arg = word.split('');
    var rev = '';    
        for (var i = word.length - 1; i >= 0; i--) {
            rev += word[i]
        }
        var reversedText = rev.replace(/,/g, "\n");
        return reversedText;
}

console.log(reverse(arg));