public class J3 {
    // <<<
    static int t() {
        try { return 1; }
        finally { System.out.print("F"); }
    }

    public static void main(String[] args) {
        int x = 0;
        for (int i = 0; i < 6; i++) {
            if (i == 2) continue;
            if (i == 5) break;
            x += i;
        }
        System.out.println(x + " " + t());
    }
    // >>>
}
