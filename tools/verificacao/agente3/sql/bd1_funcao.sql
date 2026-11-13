-- ESP-BD-V001: função PL/pgSQL (variação de ESP-BD-0103). Executado no PostgreSQL 16.
CREATE TABLE lancamento (cliente_id INTEGER, valor NUMERIC);
INSERT INTO lancamento VALUES (1, 200), (1, -50), (1, -30), (2, 80);
-- <<<
CREATE OR REPLACE FUNCTION saldo_cliente(p_id INTEGER)
RETURNS NUMERIC LANGUAGE plpgsql AS $$
DECLARE
    v_saldo NUMERIC := 0;
BEGIN
    SELECT SUM(valor) INTO v_saldo
      FROM lancamento
     WHERE cliente_id = p_id;
    IF v_saldo IS NULL THEN
        RETURN -1;
    END IF;
    RETURN v_saldo;
END;
$$;

SELECT saldo_cliente(1), saldo_cliente(3);
-- >>>
