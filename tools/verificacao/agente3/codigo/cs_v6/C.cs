public class Cliente {
    public string Nome { get; set; }
    public decimal Limite { get; set; }
}
class Programa { static void Main() { var c = new Cliente("Ana"); c.Limite = 500; System.Console.WriteLine(c.Nome + " " + c.Limite); } }
