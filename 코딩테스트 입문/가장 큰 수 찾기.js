function solution(array) {
    let arr = [...array]
    arr.sort((a,b) => a-b);
    let bigNum = arr[arr.length-1];
    let bigIdx = array.indexOf(bigNum);
    
    return [bigNum, bigIdx];
}