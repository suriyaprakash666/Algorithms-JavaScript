function RecBinarySearch(arr, target){
    return (arr, target, 0, arr.length-1)
}

function Search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex)
        return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }
    if(target < arr[middleIndex]){
       return Search(arr, target, leftIndex, middleIndex-1);
    } else {
       return Search(arr, target, middleIndex + 1, rightIndex);
    }
}