# Projeto para listagem de habilidades de um Pokémon

A ideia desse projeto é de, através de uma API fornecida pelo https://pokeapi.co/, possibilitar a busca de habilidades de Pokémons ordenadas alfabeticamente. O projeto conta com duas aplicações, o `pokemon-backend`, responsável por integrar com a API fornecida pelo pokeapi e disponibilizar um endpoint que lista as habilidades de um pokemon alfabeticamente. E o `pokemon-frontend`, a partir do qual é possível buscar as habilidades de Pokémons através de uma interface amigável.

## pokémon-backend

Essa aplicação foi construída com Node.js, Typescript, Express, Axios e Jest e disponibiliza um endpoint que pode ser acessado através de requisições HTTP do tipo GET através da URL e Porta da aplicação. Exemplo: `http://localhost:3000/api/v1/pokemon/pikachu/abilities`.

## pokémon-frontend

Essa aplicação foi construída com React, Typescript, Axios, HTML, CSS e é responsável por disponibilizar uma interface em que é possível consultar as habilidades de um determinado Pokémon, através de um campo de busca. Essa aplicação se comunica com o `pokemon-backend` através de API fornecida pelo último. Para acessar essa aplicação basta digitar sua URL e Porta. Exemplo: `http://localhost:3001/`.

## Passos para executar o projeto

1. Certifique-se que o Git, o Docker e o Docker Compose esteja instalado em sua máquina;
2. Clone o repositório em sua máquina;
3. Entre no diretório `pokemon-backend`, crie um arquivo chamado `.env`, usando o arquivo .env.example como referência, inclusive copiando os valores de lá;
4. No diretório principal, executar o comando `docker compose  up --build -d` e aguardar a criação e execução dos containers;
5. Ao finalizar o passo anterior, acessar a url `http://localhost:3001/` no navegador e a o projeto já está pronta para ser utilizada;
6. Para utilizar a API fornecida pelo backend, basta realizar requisições HTTP do tipo GET para a url `http://localhost:3000/api/v1/pokemon/:name/abilities`;
