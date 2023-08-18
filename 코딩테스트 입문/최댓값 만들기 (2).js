function solution(numbers) {
    let a = numbers.length;
    numbers.sort((a,b) => a-b);
    
    if (numbers[0] * numbers[1] > numbers[a-2] * numbers[a-1]) {
        return numbers[0] * numbers[1];
    } else {
        return numbers[a-2] * numbers[a-1];
    }
}