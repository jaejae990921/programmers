function solution(n) {
    let answer = 0;
    
    if (n % 2 == 0) {
        for (let i = 2; i <= n; i += 2) {
            answer += Math.pow(i,2);
        }
    } else {
        for (let j = 1; j <= n; j += 2) {
            answer += j;
        }
    }
    
    return answer;
}