public class Main {

    public static int gcd(int a, int b) {
        // print current function call
        System.out.printf("gcd(%d, %d)\n", a, b);

        // base cases
        if (a == 0) {
            return b;
        } else if (b == 0) {
            return a;
        }


        // recursive cases
        if (a > b) {
            int remainder = a % b;
            return gcd(b, remainder);
        } else if (a < b) {
            int remainder = b % a;
            return gcd(a, remainder);
        } else {
            return a;
        }
    }

    public static void main(String[] args) {

        int a = 33;
        int b = 88;

        System.out.println(gcd(a, b));

    }
}