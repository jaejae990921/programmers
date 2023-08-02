function solution(n) {
    /*
    let pizza = 0;
    if (n === 1) {
        return 1;
    }
    
    while(true) {
        if (n >= 7) {
            pizza++;
            n -= 7;
        } else if(n > 0 && n < 7) {
            pizza++;
            n = 0;
            break;
        } else {
            break;
        }
    }
    return pizza;*/
    
    return Math.ceil(n/7);
}