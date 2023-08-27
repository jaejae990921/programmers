function solution(n) {
    let arr = n.toString().split('').map((num) => Number(num));
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    
    return sum;
}