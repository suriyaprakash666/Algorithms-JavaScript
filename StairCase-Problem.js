function StairCase(n){
    let noOfWays = [1,2];
    for(let i =2 ;i<=n;i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[n-1];
}

console.log(StairCase(1));
console.log(StairCase(2));
console.log(StairCase(3));
console.log(StairCase(4));