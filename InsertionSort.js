function Insertion(arr){
    for(let i=1;i<arr.length;i++){
        let NextToInsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > NextToInsert){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = NextToInsert;
    }
}

const arr = [4,6,-2,-5,9,8]
Insertion(arr);
console.log(arr);
