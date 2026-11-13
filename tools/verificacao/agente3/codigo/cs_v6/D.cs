public class Cliente {
    private decimal limite;
    public string Nome { get; }
    public decimal Limite { get return limite; set limite = value; }
    public Cliente(string nome) { Nome = nome; }
}
class Programa { static void Main() { var c = new Cliente("Ana"); c.Limite = 500; System.Console.WriteLine(c.Nome + " " + c.Limite); } }
