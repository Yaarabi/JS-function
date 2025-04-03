let str='hello world this is me'
let n=str.length
let revStr= str.split("").reverse().join("")
console.log(revStr);
console.log(`the number characters in this string is: ${n}`);
function uprStr(str){
    let after = ''
    for (let i=0; i<n; i++){
        if (i==0 || str[i-1]===' '){
            after+=str[i].toUpperCase()
        } else {
            after+=str[i]
        }
    }
        return after
}
console.log(uprStr(str));