function solution(s) {
    let cnt = 0;
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[i] == s[j]) {
                cnt++;
            }
        }
        if (cnt == 1) {
            answer += s[i];
            s.replaceAll(s[i], '')
        }
        cnt = 0;
    }
    answer = [...answer].sort().join('');
    return answer;
}