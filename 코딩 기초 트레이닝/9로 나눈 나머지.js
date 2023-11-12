function solution(number) {
    let sum = 0;
    let numArr = [...number];
    
    numArr.map((num) => sum += Number(num));
    
    return sum % 9;
}