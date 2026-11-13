using System;
class Programa {
    // <<<
    static void Ajusta(ref int a, out int b, int c) {
        a += c;
        b = a * 2;
        c = 0;
    }

    static void Main() {
        int x = 3, z = 5;
        Ajusta(ref x, out int y, z);
        Console.WriteLine(x + " " + y + " " + z);
    }
    // >>>
}
