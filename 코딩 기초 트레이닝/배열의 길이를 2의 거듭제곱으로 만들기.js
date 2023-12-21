function solution(arr) {
    let len = arr.length;
    let totalLen = 2 ** Math.ceil(Math.log2(len));
    
    return [...arr, ...new Array(totalLen - len).fill(0)];
}