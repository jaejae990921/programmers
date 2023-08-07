function solution(hp) {
    let j = 0;
    let b = 0;
    let w = 0;
    
    if (hp >= 5) {
        j = Math.floor(hp / 5);
        hp = hp % 5;
    }
    if (hp >= 3) {
        b = Math.floor(hp / 3);
        hp = hp % 3;
    }
    
    if (hp >= 1) {
        w = hp;
    }
    
    return j+b+w;
}