function solution(my_string) {
    let nums = my_string.replace(/\D/g, '');
    let numArr = []
    for (let i = 0; i < nums.length; i++) {
        numArr.push(Number(nums[i]));
    }
    return numArr.sort((a,b)=>a-b);
}