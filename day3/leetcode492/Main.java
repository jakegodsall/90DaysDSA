public class Main {

    public static int[] constructRectangle(int area) {
        // declare array to hold solution
        int[] solution = new int[2];

	// initialise length and width to be the floored square root of the area
        int length = (int)Math.sqrt(area);
        int width = (int)Math.sqrt(area);

        while (length * width != area) {
            if (length*width < area) {
                length++;
            } else {
                width--;
            }
        }

        solution[0] = length;
        solution[1] = width;

        return solution;
    }

    public static void main(String[] args) {
        int area = 75;

        int[] solution = constructRectangle(area);

        System.out.printf("Area: %d\nLength: %d\nWidth: %d\n", area, solution[0], solution[1]);
    }
}
