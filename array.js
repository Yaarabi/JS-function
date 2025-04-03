let arr=[12,3,4,1,0,9]
let n= arr.length
// function that find the max and min value of an array
function minMax(arr){
    return [Math.min(...arr) , Math.max(...arr)]
}
console.log(minMax(arr));
//  function that return the sum of an array elements 
function sumArr(arr){
    let sum = 0
    for (let i=0; i<n; i++){
        sum+=arr[i]
    }
    return sum
}
console.log(sumArr(arr));
// function that filter an array based on the element of this array is even
function filterArr(arr){
    let ar = []
    for (let i=0; i<n; i++){
        if (arr[i]%2==0){
            ar.push(arr[i])
        }
    }
    return ar
}
console.log(filterArr(arr));

