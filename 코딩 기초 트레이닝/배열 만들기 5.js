function solution(intStrs, k, s, l) {
    let answer = [];
    
    for (let num of intStrs) {
        num = Number(num.slice(s, s+l));
        
        if (num > k) answer.push(num);
    }
    
    return answer;
}