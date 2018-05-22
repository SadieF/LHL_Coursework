let args = process.argv.slice(2)
let answer = 0
for (let i = 0; i < args.length; i++) {
    answer += Number(args[i])
}
console.log(answer)
