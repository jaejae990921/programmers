function solution(my_string) {
    let sum = 0;
    let jung = /[a-zA-Z]/gi;
    let nums = my_string.replaceAll(jung, " ").split(" ");
    
    for (num of nums) {
        if (Number(num)) {
            sum += Number(num);
        }
    }
    
    return sum;
}