function solution(A, B) {
    if (A === B) return 0;
    
    let aS = [...A];
    
    for (let i = 1; i <= aS.length; i++) {
        aS.unshift(aS.pop());
        
        if (aS.join('') === B) return i
    }
    
    return -1;
}