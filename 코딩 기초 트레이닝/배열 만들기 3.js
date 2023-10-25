function solution(arr, intervals) {
    let front = arr.slice(intervals[0][0], intervals[0][1] + 1);
    let back = arr.slice(intervals[1][0], intervals[1][1] + 1);
    
    return front.concat(back);
}