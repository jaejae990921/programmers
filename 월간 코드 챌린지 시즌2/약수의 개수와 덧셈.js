function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        sum += count(i) ? +i : -i;
    }
    
    return sum;
    
    function count(num) {
        let cnt = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) cnt++
        }
        return cnt % 2 == 0 ? true : false
    }
}