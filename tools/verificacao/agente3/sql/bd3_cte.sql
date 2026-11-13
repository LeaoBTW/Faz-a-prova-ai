-- ESP-BD-V003: CTE recursiva (inédita, Apostila 05 §7.10). Executado no PostgreSQL 16 e no SQLite.
CREATE TABLE funcionario (id INTEGER, nome VARCHAR(20), id_gerente INTEGER);
INSERT INTO funcionario VALUES
 (1, 'Ana', NULL), (2, 'Bia', 1), (3, 'Caio', 1),
 (4, 'Duda', 2), (5, 'Enzo', 2), (6, 'Fabi', 4);
-- <<<
WITH RECURSIVE hierarquia (id, nome, nivel) AS (
    SELECT id, nome, 1 FROM funcionario WHERE id_gerente IS NULL
    UNION ALL
    SELECT f.id, f.nome, h.nivel + 1
      FROM funcionario f JOIN hierarquia h ON f.id_gerente = h.id
)
SELECT nivel, COUNT(*) FROM hierarquia GROUP BY nivel ORDER BY nivel;
-- >>>
