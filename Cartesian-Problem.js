function Cartesian(arr1 ,arr2){
    let result = [];
    for(let i=0 ; i<arr1.length ; i++){
        for(let j=0 ; j<arr2.length ; j++){
            result.push([arr1[i],arr2[j]]);
        }
    }
    return result;
}

const arr1 = [2,4,3];
const arr2 = [1,5,3,7];
console.log(Cartesian(arr1, arr2));