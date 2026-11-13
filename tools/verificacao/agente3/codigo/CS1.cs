using System;
// <<<
class A { public virtual string F() => "A"; public string G() => "A"; }
class B : A { public override string F() => "B"; public new string G() => "B"; }
class C : B { public override string F() => "C"; }

class Programa {
    static void Main() {
        A x = new C();
        Console.WriteLine(x.F() + x.G() + ((B)x).G());
    }
}
// >>>
