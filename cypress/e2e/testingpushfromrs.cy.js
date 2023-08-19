class Solution {
    public int solution(int[] A) {
        int n = A.length;
        boolean[] seen = new boolean[n + 1];

        for (int num : A) {
            if (num > 0 && num <= n) {
                seen[num] = true;
            }
        }

        for (int i = 1; i <= n; i++) {
            if (!seen[i]) {
                return i;
            }
        }

        return n + 1;
    }
}