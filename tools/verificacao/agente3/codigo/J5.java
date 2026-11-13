public class J5 {
    public static void main(String[] args) {
        // <<<
        int i = 5;
        int j = i-- * 2 + ++i;
        String s = 1 + 2 + "a" + 'b';
        char c = 'x'; c -= 2;
        System.out.println(i + " " + j + " " + s + " " + c + " " + (7 / 2 * 2.0));
        // >>>
    }
}
