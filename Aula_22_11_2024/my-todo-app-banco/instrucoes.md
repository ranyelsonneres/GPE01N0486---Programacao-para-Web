#### Etapa 1 - Criação da Estrutura do Projeto com Vite:
- No terminal, execute os comandos abaixo para criar o projeto React com Vite:
```bash
npm create vite@latest my-todo-app-banco -- --template react
cd my-todo-app-banco
npm install
```
#### Etapa 2 - Estrutura inicial:
- Dentro da pasta do projeto, organize os arquivos e pastas de forma simples:
```css
my-todo-app/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── ...
```

#### Etapa 3 - Configuração Back-End com Express e MySQL:
- Instalar dependências do back-end: dentro do diretório raiz do seu projeto, crie uma pasta chamada ```server``` para o back-end e navegue até ela. Após isso, inicialize um projeto Node.js e instale as dependências necessárias:
```bash
mkdir server
cd server
npm init -y
npm install express mysql2 sequelize body-parser cors
```
  - express: Framework para criar o servidor web.
  - mysql2: Cliente MySQL para o Node.js.
  - sequelize: ORM (Object-Relational-Mapper) para facilitar a interação com o banco de dados.
    - faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos JavaScript.
    - o banco de dados cria as tabelas automaticamente com base nos modelos que você define no código. Então, você não precisa criar explicitamente as tabelas e as colunas no banco de dados; o Sequelize faz isso para você quando você define um modelo.
    - o Sequelize precisa ter acesso à definição do modelo, e você precisa rodar o método sync() para garantir que ele sincronize o modelo com o banco de dados (criando as tabelas se elas não existirem).
    - O Sequelize utiliza o modelo que você define (um arquivo como models/todo.js, por exemplo) para criar a tabela correspondente no banco de dados. Quando você chama sequelize.sync(), ele verifica se a tabela já existe. Se não existir, ele a cria com base na definição do modelo.
  - body-parser: Middleware para processar dados do corpo da requisição.
  - cors: Middleware para permitir requisições entre diferentes origens (importante para o front-end React interagir com o back-end).

#### Etapa 4 - Criar a estrutura de diretórios e arquivos:
- Dentro da pasta server, crie os seguintes arquivos e pastas:
```bash
server/
├── models/
│   └── todo.js
├── routes/
│   └── todoRoutes.js
├── config/
│   └── db.js
└── server.js
```
- db.js: este arquivo irá configurar a conexão com o banco de dados MySQL.
- todo.js: este arquivo define mo modelo da tabela "todos" no banco de dados.
- todoRoutes.js: este arquivo define as rotas do CRUD para as tarefas.
- server.js: arquivo de configuração do servidor Express para lidar com as rotas e a conexão com o banco de dados.
#### Etapa 5 - Crie o banco de dados
- Crie um banco de dados no MySQL para armazenar as tarefas:
```sql
CREATE DATABASE todoApp;
```
- Depois, configure as credenciais do banco no arquivo de configuração do Sequelize.

#### Etapa 6 - Conectar o Front-End com o Back-End:
- Agora, no lado do React (front-end), precisamos fazer requisições HTTP para o back-end Express para realizar as operações de CRUD. Você pode usar axios ou a API fetch do JavaScript.
- Instalar o "axios" no Front-End. Para isso vá na pasta do seu front-end (React), e instale o "axios":
```bash
npm install axios
```

#### Etapa 7 - Rodando o projeto:
- No terminal, inicie o back-end (Express), ele deve rodar em uma porta diferente do cliente:
```bash
cd server
nodemon server.js
```
- No terminal, inicie o front-end (React):
```bash
cd <diretório-do-front-end>
npm run dev
```
- Agora, seu projeto React deve estar consumindo as rotas da API Express, que por sua vez está interagindo com o banco de dados MySQL.
