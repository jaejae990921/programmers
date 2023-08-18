function solution(dots) {
    let x = dots[0][0]
    let y = dots[0][1]
    let dx = 0;
    let dy = 0;
    
    for (let i = 1; i < 4; i++) {
        if (x != dots[i][0]) {
            dx = dots[i][0]
        } else if (y != dots[i][1]) {
            dy = dots[i][1]
        }
    }
    
    dx = Math.abs(dx - x);
    dy = Math.abs(dy - y)
    
    return dx * dy;
}