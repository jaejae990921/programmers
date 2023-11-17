function solution(my_string, indices) {
    let answer = '';
    
    [...my_string].map((ch, idx) => indices.includes(idx) ? null : answer += ch)
    
    return answer;
}