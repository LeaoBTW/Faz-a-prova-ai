using System;
// <<<
public class Conta {
    private decimal _saldo;
    public decimal Saldo {
        get => _saldo;
        set { if (value >= 0) _saldo = value; }
    }
}

class Programa {
    static void Main() {
        var c = new Conta();
        c.Saldo = 80;
        c.Saldo -= 100;
        c.Saldo += 15;
        Console.WriteLine(c.Saldo);
    }
}
// >>>
