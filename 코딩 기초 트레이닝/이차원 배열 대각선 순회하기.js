function solution(board, k) {
    let v = board.length;
    let h = board[0].length;
    let sum = 0;
    
    for (let i = 0; i < v; i++) {
        for (let j = 0; j < h; j++) {
            if (i+j <= k) sum += board[i][j];
        }
    }
    
    return sum;
}