function solution(age) {
    let as = age.toString();
    let answer = '';
    let idx = 97;
    let cidx;
    
    for (let i = 0; i < as.length; i++) {
        cidx = Number(as[i]);
        answer += String.fromCharCode(idx + cidx);
    }
    
    return answer;
}