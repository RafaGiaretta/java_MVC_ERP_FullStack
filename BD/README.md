# Projeto Acadêmico: DER e Banco de Dados

Este diretório contém os arquivos relacionados ao Diagrama de Entidade e Relacionamento (DER) e à implementação do banco de dados para fins acadêmicos práticos do projeto.

## Conteúdo da Pasta `BD`

- **`DER-v03.png`**  
  Imagem contendo o Diagrama de Entidade e Relacionamento (DER) que serve como base para a criação do banco de dados.  
  ![Diagrama de Entidade e Relacionamento](https://i.ibb.co/602sXhv/Diagrama-em-branco-1.png)

- **`criar_db_e_tabelas.sql`**  
  Arquivo SQL com as instruções para a criação do banco de dados e suas tabelas de acordo com o DER.

- **`confchaves.sql`**  
  Arquivo SQL contendo as alterações necessárias para configurar as chaves primárias e estrangeiras.

## Como Utilizar os Arquivos

1. **Preparação do Ambiente**  
   Certifique-se de ter instalado um servidor de banco de dados compatível (ex.: MySQL, PostgreSQL, etc.). Abra o terminal ou a interface de sua ferramenta de gerenciamento de banco de dados.

2. **Execução do Script de Criação**  
   Execute o arquivo `criar_db_e_tabelas.sql` para criar o banco de dados e as tabelas básicas:
   ```sql
   source caminho/para/criar_db_e_tabelas.sql;

   ```
3. **Execução do Script de configuracao**  
   Execute o arquivo `confchaves.sql` para configurar as chaves (PK/FK):

   ```sql
   source caminho/para/confchaves.sql;

   ```

4. **Execução do Script de configuracao dos Triggers de auditoria**  
   Execute o arquivo `confTriggers.sql` para criar os triggers para controle de alteracoes:
   ```sql
   source caminho/para/confTriggers.sql;
   ```
