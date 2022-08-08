public class Main {

    public static int gcd(int a, int b) {

        // loop until either a = 0 or b = 0
        while (a != 0 && b != 0) {
            // print the current values of a and b
            System.out.printf("a=%d, b=%d)\n", a, b);
            if (a > b) {
                int remainder = a % b;
                a = b;
                b = remainder;
            } else if (b > a) {
                int remainder = b % a;
                b = a;
                a = remainder;
            }
        }

        // print the final values of a and b
        System.out.printf("a=%d, b=%d)\n", a, b);

        // check which value has become 0
        if (a == 0) {
            return b;
        } else {
            return a;
        }
    }

    public static void main(String[] args) {

        int a = 88;
        int b = 33;

        System.out.println(gcd(a, b));
    }
}