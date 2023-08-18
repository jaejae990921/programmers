function solution(polynomial) {
    let nums = polynomial.split(' + ');
    let xn = 0;
    let n = 0;
    
    for (num of nums) {
        if (num.includes('x')) {
            if(num.length == 1) {
                xn++;
            } else {
                xn += Number(num.split('x')[0]);
            }
        } else {
            n += Number(num);
        }
    }
    
    if (xn > 1 ) {
        xn = xn + "x";
    } else if (xn == 1) {
        xn = "x";
    } else {
        xn = 0;
    }
    
    if (xn != 0 && n > 0) {
        return xn + " + " + n;
    } else if (xn != 0 && n == 0) {
        return xn;
    } else {
        return n.toString();
    }
}