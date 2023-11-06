function solution(arr1, arr2) {
    let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

    if (arr1.length === arr2.length) {
        if (sum1 > sum2) {
            return 1;
        } else if (sum2 > sum1) {
            return -1;
        } else {
            return 0;
        }
    }

    return arr1.length > arr2.length ? 1 : -1;
}