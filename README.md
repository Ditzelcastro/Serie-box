🎬 SérieBox

O SérieBox é um sistema web desenvolvido para a Atividade Avaliativa Final, com o objetivo de permitir o cadastro e consulta de séries.

O sistema possibilita buscar séries em uma API pública, salvar em uma lista pessoal e acompanhar aquilo que o usuário está assistindo.

📌 Objetivo do projeto

A proposta do trabalho foi desenvolver uma aplicação web utilizando React, aplicando conceitos estudados durante a disciplina, como componentes, rotas, gerenciamento de estado, requisições para API e armazenamento local.

⚙️ Funcionalidades

O sistema possui as seguintes funcionalidades:

Buscar séries através da API pública TVMaze;
Visualizar informações das séries encontradas;
Cadastrar séries manualmente através de formulário com validação;
Adicionar séries à lista pessoal;
Filtrar e pesquisar séries cadastradas;
Visualizar detalhes da série, como:
Sinopse;
Nota;
Gêneros;
Data de estreia;
Armazenar dados usando LocalStorage, mantendo as informações salvas mesmo após fechar o navegador;
Layout responsivo para celular, tablet e computador.
🛠️ Tecnologias utilizadas

Durante o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

React → criação da interface e componentes;
React Router → navegação entre páginas;
Tailwind CSS → estilização da aplicação;
Fetch API → consumo de dados da API;
LocalStorage → armazenamento local dos dados;
Vite → ambiente de desenvolvimento do projeto.
📁 Organização do projeto
serie-box/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── api/
    │   └── tvmaze.js
    ├── hooks/
    │   └── useLocalStorage.js
    ├── context/
    │   └── ListaContext.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── SerieCard.jsx
    │   ├── ListaItem.jsx
    │   └── Ui.jsx
    └── pages/
        ├── Home.jsx
        ├── Cadastro.jsx
        ├── MinhaLista.jsx
        └── Detalhes.jsx
🚀 Como executar o projeto

Antes de iniciar, é necessário ter o Node.js instalado no computador.

1. Instalar as dependências
npm install
2. Executar o projeto
npm run dev

Depois disso, basta abrir o link exibido no terminal (normalmente algo como http://localhost:5173).

Build do projeto

Caso queira gerar a versão de produção:

npm run build
npm run preview
📡 API utilizada

O sistema utiliza a API pública TVMaze, que não precisa de chave de acesso.

Foram utilizados os seguintes endpoints:

GET /search/shows?q={termo} → busca de séries;
GET /shows/{id} → detalhes da série.
✅ Considerações finais

Esse projeto foi desenvolvido com o objetivo de praticar os conteúdos aprendidos em aula, principalmente React, rotas, consumo de API, componentização, responsividade e armazenamento local.

Além de cumprir os requisitos da atividade, o projeto também ajudou a melhorar o entendimento sobre desenvolvimento front-end e organização de aplicações web.
