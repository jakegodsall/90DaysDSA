import java.util.*;

public class Main {

    public static void reverse(int[] arr) { // reverse array function is linear time O(n)
        int maxIndex = arr.length - 1; // variable declaration: constant time
        int halfLength = arr.length / 2; // variable declaration: constant time

        for (int i = 0; i < halfLength; i++) { // loop n / 2 times
            int temp = arr[i]; // variable declaration: constant time
            arr[i] = arr[maxIndex - i]; // array element assignment: constant time
            arr[maxIndex - i] = temp; // array element assignment: constant time
        }
    }

    public static void main(String[] args) {

        int[] testArray = {1, 2, 3, 4, 5};

        System.out.println("Original Array: " + Arrays.toString(testArray));
        reverse(testArray);
        System.out.println("Reversed Array: " + Arrays.toString(testArray));
    }
}
