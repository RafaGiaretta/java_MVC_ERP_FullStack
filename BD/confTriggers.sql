DELIMITER //
CREATE TRIGGER historico_status_pedido
BEFORE UPDATE ON pedido
FOR EACH ROW
BEGIN 
	INSERT INTO hist_status (n_pedido, status_pedido, data_alteracao)
    VALUES (NEW.n_pedido, NEW.status_pedido, NOW());
END;
//

DELIMITER //
CREATE TRIGGER historico_de_preco_produto
BEFORE UPDATE ON produto
FOR EACH ROW
BEGIN 
	INSERT INTO hist_produto
    VALUES (NEW.cod_produto, NEW.preco, NOW());
END;
//
