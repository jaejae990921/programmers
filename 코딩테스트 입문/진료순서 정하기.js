function solution(emergency) {
    let max, maxidx;
    let answer = [];
    let rank = 1;
    for (let i = 0; i < emergency.length; i++) {
        max = Math.max(...emergency);
        maxidx = emergency.indexOf(max);
        answer[maxidx] = rank;
        emergency[maxidx] = 0;
        rank++;
    }
    
    return answer;
}