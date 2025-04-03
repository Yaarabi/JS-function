// function that calculate a foctorial of number 
function factorNum(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorNum(5)); 
// function that check if a number is prime
function checkNum(num){
    let a = num%2
    if ((num==2) || (num>2 && a!==0)){
        return true
    } else{
        return false
    }
}
console.log(checkNum(10));
// function generate the Fibonacci sequence up to a given number of terms 
function fiboncci(num){
    let arr = [0,1]
    let a=0
    for (let i=2; i<num; i++){
        a=arr[i-1]+arr[i-2]
        arr.push(a)
    }
    return arr
}
console.log(fiboncci(10));