# DevBurger API - Back-End

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

Este é o **back-end** da aplicação DevBurger, responsável por gerenciar dados de produtos, pedidos de clientes e autenticação de usuários. Desenvolvido com Node.js, Express e Sequelize.

---

## 🚀 Funcionalidades Principais

* **Autenticação e Autorização:** Cadastro, login de usuários e proteção de rotas com JSON Web Tokens (JWT).
* **Gerenciamento de Produtos:** Operações CRUD (Criar, Ler, Atualizar, Deletar) para produtos como hambúrgueres, acompanhamentos e bebidas.
* **Categorias:** Organização de produtos por categorias.
* **Processamento de Pedidos:** Criação, listagem e atualização de status de pedidos.
* **Validação de Dados:** Garantia da integridade dos dados através de validações robustas.

---

## 🛠 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express.js**: Framework web minimalista para Node.js.
* **Sequelize**: ORM (Object-Relational Mapping) para Node.js, facilitando a interação com bancos de dados relacionais.
* **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional robusto.
* **JSON Web Tokens (JWT)**: Padrão para criação de tokens de acesso para autenticação.
* **Dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
* **Nodemon**: Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento.
* **ESLint / Prettier**: Ferramentas para padronização e formatação do código.

---

## ⚙️ Pré-requisitos

Para executar este projeto em sua máquina local, certifique-se de ter os seguintes softwares instalados:

* **Node.js**: [Link para download](https://nodejs.org/en/download/) (versão LTS recomendada).
* **npm** ou **Yarn**: (Geralmente vêm com a instalação do Node.js).
* **PostgreSQL**: [Link para download](https://www.postgresql.org/download/) (ou utilize Docker para rodar um container PostgreSQL).

---

## 💻 Instalação

Siga os passos abaixo para clonar e configurar o projeto:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/](https://github.com/)<seu-usuario>/devburger-api-back-end.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd devburger-api-back-end
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou se você usa Yarn:
    # yarn install
    ```

---

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env` na **raiz do projeto** (`devburger-api-back-end/.env`) e configure as seguintes variáveis. **Lembre-se: NÃO inclua este arquivo no controle de versão (Git)!**

```dotenv
# Configurações do Banco de Dados PostgreSQL
DB_HOST=<o_host_do_seu_banco_ex_localhost>
DB_PORT=<a_porta_do_seu_banco_ex_5432>
DB_USER=<o_usuario_do_seu_banco>
DB_PASS=<a_senha_do_seu_banco>
DB_NAME=<o_nome_do_seu_banco_de_dados_ex_devburger_db>

# Chave Secreta para JWT (JSON Web Tokens)
JWT_SECRET=<uma_string_secreta_longa_e_aleatoria_para_producao>

# Porta em que a API será executada
PORT=<a_porta_da_api_ex_3000>


