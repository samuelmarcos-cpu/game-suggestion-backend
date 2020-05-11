# Games Poll

## Descrição

Games Poll é uma aplicação que permite fazer enquete de jogos, onde o usuário pode criar uma enquete em que os eleitores poderão votar em qualquer jogo do Internet Game Database, segundo as restrições impostas pelo criador.

## Instalação

Após obter o projeto faça a instalação das dependências através do comando `npm install`. Considerando que tenha https://nodejs.org/en/ instalado.

## Configuração

Na raiz do projeto crie um arquivo .env e defina as seguintes variaveis de ambiente.

### Banco de Dados

Credenciais do seu banco de dados MySQL. Por Exemplo:

`APP_DB_HOST=localhost APP_DB_NAME=game_suggestion APP_DB_USER=root APP_DB_PORT=3306 APP_DB_PASSWORD=`

### Chave de Criptografia

Gere um hash sha1 por qualquer aplicação web, por exemplo https://passwordsgenerator.net/sha1-hash-generator/ e defina a variável de ambiente APP_AUTH_SECRET. Por exemplo:

`APP_AUTH_SECRET = D1FE2D6350F52DF617E4E189E9EB330E7E652A75`

### API IGDB

Acesse https://api.igdb.com/ para conseguir a sua chave de acesso ao web service e atribua ela a variável de ambiente APP_IGDB_KEY. Por exemplo:

`APP_IGDB_KEY =`

## Uso

Finalmente execute o comando `npm start` para executar o backend. Se tudo estiver certo acesse http://localhost:4000/ e a ferramenta de debbug do apollo server deve aparecer.

Acesse https://github.com/samuelmarcos-cpu/game-suggestion-frontend para incorporar o frontend.
