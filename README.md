# Desafio Triàgil

Documentação da API

    Como Executar

-Clone meu repositório(codigo) diponivel em meu Github.
-Certifique-se de ter o Docker instalado.
-Execute `docker-compose up` para iniciar a API.
-Siga a documentação no código para realizar testes e explorar as funcionalidades.

    Executando a Aplicação com Docker

-Siga as instruções abaixo para executar a aplicação usando Docker.

1. Puxe a Imagem Docker

Antes de executar a aplicação, você precisa puxar a imagem do Docker Hub. Abra um terminal e execute o seguinte comando:
`->: ```bash
     docker pull nicolashenrique/desafio-triagil

2.. Inicie o Contêiner Docker
Após puxar a imagem, inicie o contêiner usando o seguinte comando:
    docker run -p 3000:3000 seu-usuario/nome-da-sua-imagem

A aplicação estará agora acessível em [http://localhost:3000]

    Como testar a API

1-GET /api/teams:

    -Abra um navegador ou use o Postman.
    -Acesse http://localhost:3000/api/teams.
    -Deverá ver uma resposta vazia, já que ainda não há times registrados.

2-POST /api/teams:

    -Use o Postman ou cURL para fazer uma solicitação POST para http://localhost:3000/api/teams.
    -Use um corpo JSON para enviar um time de exemplo:
{
 "user": "seu_usuario",
 "pokemonList": ["pikachu", "bulbasaur", "charmander"]
}
    -Verifique a resposta da API para garantir que um ID único e uma mensagem de sucesso sejam retornados.

3-GET /api/teams/{user}:

    -Acesse http://localhost:3000/api/teams/seu_usuario no navegador ou use o Postman.
    -No Postman de ser exibido algo como por exemplo:
{
    "user": "seu_usuario",
    "teamData": [
        {
            "id": 25,
            "name": "pikachu",
            "height": 4,
            "weight": 60
        },
        {
            "id": 1,
            "name": "bulbasaur",
            "height": 7,
            "weight": 69
        },
        {
            "id": 4,
            "name": "charmander",
            "height": 6,
            "weight": 85
        }
    ]
}
    -E no navegador ao como por exemplo:
{"user":"seu_usuario","teamData":[{"id":25,"name":"pikachu","height":4,"weight":60},{"id":1,"name":"bulbasaur","height":7,"weight":69},{"id":4,"name":"charmander","height":6,"weight":85}]}

Para interação com pokeApi

Certifique-se de ler a documentação oficial do Axios para obter mais detalhes sobre como usar a biblioteca.
para interagir com a PokeAPI, baixar o código, instalar as dependências (como o Axios) e executar o arquivo que contém a lógica.
