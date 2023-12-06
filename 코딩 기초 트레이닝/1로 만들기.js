function solution(num_list) {
    let cnt = 0;

    for (let num of num_list) {
        while (true) {
            if (num === 1) break;
            
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            cnt++;
        }
    }

    return cnt;
}
