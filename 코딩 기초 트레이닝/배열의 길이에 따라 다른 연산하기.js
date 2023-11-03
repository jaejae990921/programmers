function solution(arr, n) {
    let flag = arr.length % 2 == 0 ? true : false;
    
    if (flag) {
        return arr.map((num, idx) => idx % 2 != 0 ? num + n : num);    
    } else {
        return arr.map((num, idx) => idx % 2 == 0 ? num + n : num);
    }
}