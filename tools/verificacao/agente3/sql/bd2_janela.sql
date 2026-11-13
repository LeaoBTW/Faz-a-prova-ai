-- ESP-BD-V002: funções de janela (inédita, Apostila 05 §7.10). Executado no PostgreSQL 16 e no SQLite.
CREATE TABLE conta (numero INTEGER, saldo NUMERIC);
INSERT INTO conta VALUES (10, 500), (11, 300), (12, 500), (13, 100), (14, 300);
-- <<<
SELECT numero,
       ROW_NUMBER() OVER (ORDER BY saldo DESC, numero) AS rn,
       RANK()       OVER (ORDER BY saldo DESC)         AS rk,
       DENSE_RANK() OVER (ORDER BY saldo DESC)         AS drk
  FROM conta
 WHERE numero = 13 OR numero = 14;
-- >>>
