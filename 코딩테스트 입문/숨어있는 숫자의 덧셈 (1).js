function solution(my_string) {
    let nums = my_string.replace(/\D/g, '');
    let numArr = [...nums]
    let sum = 0;
    
    for (let i = 0; i < numArr.length; i++) {
        sum += Number(numArr[i])
    }
    
    return sum;
}