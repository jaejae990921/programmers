function solution(sides) {
    let count = 0
    let max = Math.max(...sides) // 최대
    let min = Math.min(...sides) // 최소
    
    for(let i = max - min + 1 ; i <= max ; i++) {
        count++;
    }
    
    for(let i = max + 1 ; i < max + min; i++) {
        count++;
    }
    
    return count;
}