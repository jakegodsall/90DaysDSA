public class Main {
    public static int findMin(int[] arr) { // find minimum of unsorted array function: linear time O(n)
        int min = arr[0]; // variable initialisation: constant time

        for (int i = 1; i < arr.length; i++) { // loop n times
            if (arr[i] < min) { // test: constant time
                min = arr[i]; // variable assignment: constant time
            }
        }
        return min; // return statement: constant time
    }

    public static void main(String[] args) {
        int[] testArr = {1, 4, 10, 9, 4, 5, 10, -1, 182};

        int minValue = findMin(testArr);

        System.out.println(minValue);
    }
}
