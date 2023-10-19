function solution(myString) {
    return [...myString].map((ch) => ch.charCodeAt() < 108 ? 'l' : ch).join('');
}