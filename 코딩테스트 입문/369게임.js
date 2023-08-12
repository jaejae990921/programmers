function solution(order) {
    let nums = ['3', '6', '9'];
    let orderS = order.toString()
    let cnt = 0;
    
    for (let i = 0; i < orderS.length; i++) {
        if (nums.includes(orderS[i])) {
            cnt++;
        }
    }
    
    return cnt;
}