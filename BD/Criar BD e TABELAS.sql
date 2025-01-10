-- CREATE DATABASE  db_casa7;

USE db_casa7;

/*
CREATE TABLE cliente(
	cpf VARCHAR(50) PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	telefone VARCHAR(20), 
	endereco INT NOT NULL
);
*/
/*
CREATE TABLE endereco(
	cod_end INT AUTO_INCREMENT PRIMARY KEY,
    cep VARCHAR(10),
    estado VARCHAR(50),
    cidade VARCHAR(100),
    bairro VARCHAR(100),
    rua VARCHAR(100),
    numero INT
);
*/
/*
CREATE TABLE pedido(
	n_pedido INT AUTO_INCREMENT PRIMARY KEY,
    cpf_cliente VARCHAR(50) NOT NULL,
    cod_produto INT NOT NULL, 
    forma_pagamento VARCHAR(50),
    status_pedido VARCHAR(50),
    valor_total DECIMAL(8,2),
    data_pedido date
);
*/
/*
CREATE TABLE produto(
	cod_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL, 
    preco DECIMAL (8,2) NOT NULL,
    quantidade INT,
    categoria INT
);
*/
/*
CREATE TABLE hist_status(
	n_pedido INT,
    status_pedidos VARCHAR(50),
    data_alteracao DATE 
);
*/
/*
CREATE TABLE itens_pedido(
	n_pedido INT,
    cod_produto INT,
    quantidade INT,
    preco_unitario DECIMAL (8,2)
);
*/
/*
CREATE TABLE categoria(
	cod_cat INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100)
);
*/
/*
CREATE TABLE hist_produto(
	cod_produto INT ,
    preco_atual DECIMAL(8,2),
    data_mod DATE
);
*/