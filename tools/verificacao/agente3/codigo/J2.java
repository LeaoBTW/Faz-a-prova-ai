// <<<
class Animal {
    String som() { return "..."; }
    static String tipo() { return "Animal"; }
}
class Cao extends Animal {
    String som() { return "Au"; }
    static String tipo() { return "Cao"; }
}
public class J2 {
    public static void main(String[] args) {
        Animal a = new Cao();
        Cao c = new Cao();
        System.out.println(a.som() + " " + a.tipo() + " " + c.tipo());
    }
}
// >>>
