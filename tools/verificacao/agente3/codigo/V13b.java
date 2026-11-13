// <<<
class SaldoException extends Exception {
    SaldoException(String m) { super(m); }
}

class Conta {
    int saldo = 100;
    void sacar(int v) throws SaldoException {
        if (v > saldo) throw new SaldoException("insuficiente");
        saldo -= v;
    }
}

public class V13b {
    static int processa(Conta c, int v) {
        try {
            c.sacar(v);
            return 1;
        } catch (SaldoException e) {
            return 2;
        } finally {
            c.saldo += 5;
        }
    }

    public static void main(String[] args) {
        Conta c = new Conta();
        int r1 = processa(c, 60);
        int r2 = processa(c, 60);
        System.out.println(r1 + " " + r2 + " " + c.saldo);
    }
}
// >>>
