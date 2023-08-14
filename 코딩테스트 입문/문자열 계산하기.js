function solution(my_string) {
    let arr = my_string.split(' ');
    let sum = Number(arr[0]);
    
    for(let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '+' :
                sum += Number(arr[i+1]);
                break;
            case '-' :
                sum -= Number(arr[i+1]);
                break;
        }
    }
    
    return sum;
}