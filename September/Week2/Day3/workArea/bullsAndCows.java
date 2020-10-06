package leetcode.September.Week2.Day3.workArea;

import java.util.*;

class bullsAndCows {

    public static String getHint(String secret, String guess) {
        int[] numbers = new int[10];
        System.out.println(numbers);
        int bulls=0, cows = 0;

        for(int i=0;i<guess.length();i++) {
            int s = secret.charAt(i) - '0';
            int g = guess.charAt(i) - '0';

            if(s==g) bulls++;
            else {
                if(numbers[s]++ < 0) cows++;
                if(numbers[g]-- > 0) cows++;
            }
        }
        return bulls+"A"+cows+"B";
    }

    public static void main(String[] args) {
        getHint("1807", "7810");
    }
}