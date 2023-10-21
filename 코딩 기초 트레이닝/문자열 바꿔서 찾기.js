function solution(myString, pat) {
    return myString.split('').map((ch) => ch == 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}