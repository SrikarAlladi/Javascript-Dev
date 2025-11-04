
const longestSeq = (nums:Array<number>) => {
    let set = new Set(nums);

    let max:number = 0;
    let curr:number = 0;
    let count:number = 0;

    for(let num of set){
        if(!set.has(num-1)){
            count ++;
            curr = num;
        }

        while(set.has(num+1)){
            count++;
            curr++;
        }

        max = Math.max(max,curr)

    }
    return max;

}