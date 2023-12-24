function solution(nums) {
    let cnt = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) cnt++;
            }
        }
    }

    return cnt;
}

function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}
