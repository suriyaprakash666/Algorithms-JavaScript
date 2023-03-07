function linear(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
    return -1;
}

const arr = [4,6,-2,-5,9,8];
console.log(linear(arr, 8));