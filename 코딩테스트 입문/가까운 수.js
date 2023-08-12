function solution(array, n) {
    let nums = [];
    
    array.sort((a,b) => a-b);
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return n;
        } else {
            nums.push(Math.abs(array[i] - n));
        }
    }
    
    let min = Math.min(...nums);
    let minIdx = nums.indexOf(min);
    
    return array[minIdx];
}