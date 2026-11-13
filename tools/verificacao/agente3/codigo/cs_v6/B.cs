public class Cliente {
    public string Nome { get; }
    public decimal Limite { get; private set; }
    public Cliente(string nome) { Nome = nome; }
}
class Programa { static void Main() { var c = new Cliente("Ana"); c.Limite = 500; System.Console.WriteLine(c.Nome + " " + c.Limite); } }
