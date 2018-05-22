var arg = process.argv.slice(2) + '';
var arg = arg.split('')
function obfuscate(password) {
    for (var i = 0; i < arg.length; i++) {
        if (arg[i] === 'a') {
            arg[i] = 4;
        }
        if (arg[i] === 'e') {
            arg[i] = 3;
        }
        if (arg[i] === 'o') {
            arg[i] = 0;
        }
        if (arg[i] === 'l') {
            arg[i] = 1;
        }
    }
    return arg.join('');
}

console.log(obfuscate(arg))