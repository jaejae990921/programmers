function solution(cipher, code) {
    let answer = '';
    let cnt = 1;
    
    for (let i = 0; i < cipher.length; i++) {
        if (cnt == code) {
            answer += cipher[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    
    return answer;
}