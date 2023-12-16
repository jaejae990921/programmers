function solution(n) {
    const nCnt = cal(n);
    let answer = n + 1;
    
    while(true) {
        if (cal(answer) == nCnt) break;
        answer++;
    }
    
    return answer;
}

function cal(num) {
    num = num.toString(2);
    let cnt = 0;
    
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 1) cnt++;
    }
    
    return cnt;
}