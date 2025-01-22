# Back-End do Sistema ERP

Este repositório contém o back-end do sistema ERP desenvolvido em **Java**, utilizando a arquitetura **MVC (Model-View-Controller)**.

## Tecnologias Utilizadas

- **Java**: Linguagem de programação principal.
- **Hibernate**: Utilizado para criação e gerenciamento de objetos e mapeamento objeto-relacional (ORM).
- **Banco de Dados**: Conexão realizada via **Controllers** e **Models**.
- **Servidor de Aplicação**: **Apache Tomcat 9**.
- **IDE**: Projeto desenvolvido utilizando o **Eclipse IDE**.

## Estrutura do Projeto

1. **Models**: Contém as classes responsáveis pela representação das entidades do banco de dados, configuradas com Hibernate.
2. **Controllers**: Gerenciam a lógica de conexão com o banco e servem como intermediários entre as views e os models.
3. **View de Testes**: Um arquivo chamado `view.html`, localizado na pasta `webapp`, está disponível para testar diretamente as funcionalidades da aplicação.

## Como Executar

1. Certifique-se de que o **Apache Tomcat 9** esteja instalado e configurado corretamente em sua máquina.
2. Importe o projeto para o **Eclipse IDE**.
3. Faça o deploy do projeto no Tomcat.
4. Use o arquivo `view.html`, localizado na pasta `webapp`, para testar endpoints e funcionalidades diretamente no navegador.

## Testes

O arquivo `view.html` permite:

- Testar os endpoints do back-end.
- Validar funcionalidades como criação, leitura, atualização e exclusão (CRUD).

## Requisitos

- **JDK 11** ou superior.
- **Apache Tomcat 9**.
- Banco de dados configurado e rodando (exemplo: MySQL).
- Dependências de Hibernate corretamente configuradas no projeto.

---
