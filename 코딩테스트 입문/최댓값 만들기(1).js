function solution(numbers) {
    let len = numbers.length;
    numbers.sort((a, b) => a - b)
    return numbers[len - 1] * numbers[len - 2];
}