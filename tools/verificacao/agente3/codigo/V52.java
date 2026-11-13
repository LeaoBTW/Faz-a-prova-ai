public class V52 {
    public static void main(String[] args) {
        // <<<
        String a = "Pix";
        String b = "Pi" + "x";
        String c = new String("Pix");
        String d = c.intern();
        System.out.println((a == b) + " " + (a == c) + " " + (a == d) + " " + (-7 / 2) + " " + (-7 % 3));
        // >>>
    }
}
