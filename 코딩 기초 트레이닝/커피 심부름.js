function solution(order) {
    let sum = 0;

    for (let menu of order) {
        sum += menu.includes('latte') ? 5000 : 4500;
    }

    return sum;
}
