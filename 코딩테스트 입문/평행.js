function solution(dots) {
    let flag = false;
    
    slope(dots[0], dots[1], dots[2], dots[3]);
    slope(dots[0], dots[2], dots[3], dots[1]);
    slope(dots[0], dots[3], dots[1], dots[2]);
    
    function slope (a, b, c, d) {
        let ab = (b[1] - a[1]) / (b[0] - a[0]);
        let cd = (d[1] - c[1]) / (d[0] - c[0]);
        
        if (ab === cd) {
            flag = true;
        }
    }
    
    return flag ? 1 : 0;
}