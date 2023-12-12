class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int start, end;
        
        for (int i = 0; i < queries.length; i++) {
            start = queries[i][0];
            end = queries[i][1];
            
            for (int j = start; j <= end; j++) {
                arr[j]++;
            }
        }
        
        return arr;
    }
}