function solution(citations) {
    citations.sort((a, b) => b - a);
    
    let cnt = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) cnt++;
    }
    
    return cnt;
}