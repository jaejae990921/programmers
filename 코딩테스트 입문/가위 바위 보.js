function solution(rsp) {
    let answer = '';
    let arr = rsp.split('');
    
    for (i of arr) {
        if (i === '2') {
            answer += '0'
        } else if (i === '0') {
            answer += '5'
        } else {
            answer += '2'
        }
    }
    
    return answer;
}