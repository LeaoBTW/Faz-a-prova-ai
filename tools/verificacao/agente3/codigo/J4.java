import java.util.*;
public class J4 {
    public static void main(String[] args) {
        // <<<
        List<Integer> l = new ArrayList<>(List.of(4, 2, 4, 9));
        Set<Integer> s = new TreeSet<>(l);
        Map<String, Integer> m = new HashMap<>();
        m.put("x", 1); m.put("y", 1); m.put("x", 3);
        l.remove(2);
        System.out.println(l + " " + s + " " + m.get("x") + " " + m.size());
        // >>>
    }
}
