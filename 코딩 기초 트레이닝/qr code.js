function solution(q, r, code) {
    let answer = code.split('').filter((ch, idx) => idx % q == r)
    return answer.join('');
}