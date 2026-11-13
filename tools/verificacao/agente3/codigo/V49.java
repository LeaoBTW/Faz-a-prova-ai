// <<<
class Tarifa {
    String calc(int v) { return "T-int"; }
    String calc(double v) { return "T-double"; }
}
class TarifaPix extends Tarifa {
    @Override
    String calc(int v) { return "P-int"; }
}
public class V49 {
    public static void main(String[] args) {
        Tarifa t = new TarifaPix();
        System.out.println(t.calc(10) + " " + t.calc(10.0) + " " + t.calc('A'));
    }
}
// >>>
