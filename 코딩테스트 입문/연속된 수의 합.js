function solution(num, total) {
    let len = Math.floor(num / 2);
    let start = Math.ceil(total / num) - len;
    let end = Math.floor(total / num) + len;
    let answer = [];
    
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    
    return answer;
}