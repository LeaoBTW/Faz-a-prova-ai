public class J1 {
    // <<<
    static int f(int x) { x = x * 3; return x; }
    static void g(int[] v) { v[0] = 99; }
    static void h(int[] v) { v = new int[] {7, 7}; v[1] = 8; }

    public static void main(String[] args) {
        int a = 4; int[] v = {1, 2};
        int b = f(a);
        g(v);
        h(v);
        System.out.println(a + " " + b + " " + v[0] + " " + v[1]);
    }
    // >>>
}
