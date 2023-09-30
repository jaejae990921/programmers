function solution(num_str) {
    let num = [...num_str];
    let sum = 0;
    
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    
    return sum;
}