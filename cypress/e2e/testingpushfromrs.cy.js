class Solution {
    public String solution(int[] T) {
        int n = T.length;
        int seasonLength = n / 4;
        
        int[] amplitudes = new int[4];
        
        for (int i = 0; i < 4; i++) {
            int startIndex = i * seasonLength;
            int endIndex = startIndex + seasonLength;
            
            int maxTemp = Integer.MIN_VALUE;
            int minTemp = Integer.MAX_VALUE;
            
            for (int j = startIndex; j < endIndex; j++) {
                maxTemp = Math.max(maxTemp, T[j]);
                minTemp = Math.min(minTemp, T[j]);
            }
            
            amplitudes[i] = maxTemp - minTemp;
        }
        
        int maxAmplitudeIndex = 0;
        for (int i = 1; i < 4; i++) {
            if (amplitudes[i] > amplitudes[maxAmplitudeIndex]) {
                maxAmplitudeIndex = i;
            }
        }
        
        switch (maxAmplitudeIndex) {
            case 0:
                return "WINTER";
            case 1:
                return "SPRING";
            case 2:
                return "SUMMER";
            case 3:
                return "AUTUMN";
            default:
                return "";
        }
    }
}