function TOH(n, fromRod, toRod, usingRod){
    if(n == 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    TOH(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    TOH(n-1, usingRod, toRod, fromRod);
}

TOH(3, 'A', 'C', 'B');
