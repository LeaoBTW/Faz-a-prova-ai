import java.sql.*;
// Compila apenas: confere a sintaxe da alternativa correta (não há driver JDBC no container).
public class V45 {
    static void consulta(Connection con, String cpf) throws SQLException {
        PreparedStatement ps = con.prepareStatement(
            "SELECT numero, saldo FROM conta WHERE cpf = ?");
        ps.setString(1, cpf);
        ResultSet rs = ps.executeQuery();
        while (rs.next()) System.out.println(rs.getString("numero"));
    }
    public static void main(String[] args) { System.out.println("compilou"); }
}
