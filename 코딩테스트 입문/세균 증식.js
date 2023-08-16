function solution(n, t) {
    let answer = n;
    for (let i = t; i >= 1; i--) {
        answer *= 2;
    }
    return answer;
}