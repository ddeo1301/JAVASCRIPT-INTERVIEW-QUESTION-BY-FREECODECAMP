DP, GRAPH

DP
 - Unbounded(Repetation) 
    - sum/total approach   dp[0][1] = 1; {Multiple Occurances -> jo kbhi nhi lnge wo kbhi nhi liye}
    - 0/1  ->  Non -ve Integer   dp[0][0] = 1


GRAPH
 - for(int i = 0; i < mat.length; i++){
        list.get(mat[i][1]).add(mat[i][0]);
    }