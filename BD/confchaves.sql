USE db_casa7;

/*
ALTER TABLE cliente 
ADD CONSTRAINT fk_endereco
FOREIGN KEY (endereco) REFERENCES endereco(cod_end)
;
*/
/*
ALTER TABLE itens_pedido
ADD CONSTRAINT fk_n_pedido
FOREIGN KEY (n_pedido) REFERENCES pedido (n_pedido),
ADD CONSTRAINT fk_cod_produto
FOREIGN KEY (cod_produto) REFERENCES produto (cod_produto)
;
*/
/*
ALTER TABLE produto
ADD CONSTRAINT fk_categoria
FOREIGN KEY (categoria) REFERENCES categoria(cod_cat)
;
*/
/*
ALTER TABLE hist_produto
ADD CONSTRAINT fk_hist_cod_produto
FOREIGN KEY (cod_produto) REFERENCES produto (cod_produto)
;
*/
/*
ALTER TABLE hist_status
ADD CONSTRAINT fk_h_n_pedido
FOREIGN KEY (n_pedido) REFERENCES pedido(n_pedido);
*/
/*
ALTER TABLE pedido 
ADD CONSTRAINT fk_cpf_cliente
FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf),
ADD CONSTRAINT fk_ped_cod_produto
FOREIGN KEY (cod_produto) REFERENCES produto(cod_produto)
;
*/
