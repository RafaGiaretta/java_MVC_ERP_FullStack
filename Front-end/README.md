# Front-End do Sistema ERP

Este repositório contém o front-end do sistema ERP desenvolvido em **Angular**, configurado para integrar com o back-end do projeto e testar a conexão com o banco de dados.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento do front-end.
- **HTML, CSS, TypeScript**: Linguagens base para criação da interface.
- **Bootstrap**: Framework CSS utilizado para estilização e design responsivo.

## Funcionalidades

- **Página de Listagem de Produtos**:  
  A página de listar produtos foi configurada como teste inicial para a integração do front-end com o back-end e o banco de dados.

## Estrutura do Projeto

1. **Components**: Contém os componentes Angular utilizados no desenvolvimento da interface.
2. **Services**: Arquivo de serviço configurado para realizar as requisições ao back-end.
3. **Página de Listar Produtos**: Demonstra a comunicação com a API do back-end para exibir produtos cadastrados no banco de dados.
4. **Bootstrap**: Utilizado para criar um design limpo e responsivo na interface do usuário.

## Como Executar

1. Certifique-se de que o **Node.js** e o **Angular CLI** estão instalados em sua máquina.
2. Clone este repositório.
3. Instale as dependências com o comando:
   ```bash
   npm install
   ```

## Inicie o servidor de desenvolvimento com:

```bash
   ng serve
```

## Acesse a aplicação no navegador pelo endereço:

```bash
http://localhost:4200
```

Navegue até a página de listagem de produtos para verificar a integração com o back-end.

## Requisitos

- Node.js e npm instalados.
- Bootstrap configurado no projeto (importado no arquivo angular.json).
- Conexão com o back-end configurada corretamente no arquivo de serviço.
- Back-end em execução e com o banco de dados configurado.

## Teste de Integração

A página de listar produtos foi desenvolvida como um teste para validar:

- Comunicação entre o front-end e o back-end.
- Requisições ao banco de dados via API.
- Exibição de dados no front-end de forma dinâmica e estilizada com Bootstrap.

## Estilização com Bootstrap

O projeto utiliza o Bootstrap para:

- Tornar a interface responsiva e acessível.
- Aplicar estilos modernos aos componentes, como botões, tabelas e formulários.
- Facilitar o alinhamento e organização dos elementos na página de listagem de produtos.

## Estrutura de Diretórios

```bash
src/
├── app/
│   ├── components/produtos
│   │              ├── listar-produtos/
│   │              │   ├── listar-produtos.component.html
│   │              │   ├── listar-produtos.component.ts
│   │              │   ├── listar-produtos.component.css
│   │              │   ├── listar-produtos.model
│   │              │   └── listar-produto.service.ts
│   ├── app.module.ts
├── assets/
├── environments/

```
