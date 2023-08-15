function solution(n) {
    let nArr = n.toString().split('');
    let sum = 0;
    
    for (let i = 0; i < nArr.length; i++) {
        sum += Number(nArr[i]);
    }
    
    return sum;
}