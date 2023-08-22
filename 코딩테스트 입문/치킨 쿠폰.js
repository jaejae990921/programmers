function solution(chicken) {
    let res = 0;
    
    while(chicken >= 10) {
        res += Math.floor(chicken / 10);
        chicken = chicken % 10 + Math.floor(chicken / 10);
    }
    
    return res;
}