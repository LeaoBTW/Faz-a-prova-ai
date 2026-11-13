// <<<
class Conta {
    double saldo = 200;
    void sacar(double v) {
        if (v <= 0) throw new IllegalArgumentException("Valor inválido");
        if (v > saldo) throw new IllegalStateException("Saldo insuficiente");
        saldo -= v;
    }
}

public class V13a {
    public static void main(String[] args) {
        Conta c = new Conta();
        try {
            c.sacar(50);
            c.sacar(-10);
            c.sacar(30);
        } catch (IllegalStateException e) {
            System.out.print("S ");
        } catch (IllegalArgumentException e) {
            System.out.print("A ");
        } finally {
            System.out.print(c.saldo);
        }
    }
}
// >>>
