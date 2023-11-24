function solution(arr) {
    const flag = arr.includes(2);
    const start = arr.indexOf(2);
    const end = arr.lastIndexOf(2);
    
    return flag ? arr.slice(start, end+1) : [-1];
}