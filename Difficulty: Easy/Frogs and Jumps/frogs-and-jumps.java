// User function Template for Java

class Solution {
    public int unvisitedLeaves(int N, int leaves, int frogs[]) {
        // Code here
        boolean[] visited = new boolean[leaves + 1];
        Set<Integer> used = new HashSet<>();

        for (int j = 0; j < N; j++) {
            int jump = frogs[j];

            // Skip if jump is useless
            if (jump == 0 || jump > leaves || used.contains(jump)) continue;
            used.add(jump);

            // If already visited by smaller divisor, skip
            if (visited[jump]) continue;

            // Mark multiples
            for (int k = jump; k <= leaves; k += jump) {
                visited[k] = true;
            }
        }

        int unvisited = 0;
        for (int i = 1; i <= leaves; i++) {
            if (!visited[i]) unvisited++;
        }

        return unvisited;
    }
}
