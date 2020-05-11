# Games Poll - Backend

## Descrição

Games Poll é uma aplicação que permite fazer enquete de jogos, onde o usuário pode criar uma enquete em que os eleitores poderão votar em qualquer jogo do Internet Game Database, segundo as restrições impostas pelo criador.

## Requisitos

Além de acesso a internet e necessário ter instalado em sua maquina o node e o banco de dados MySQL. Você não é obrigado a usar o MySQL, mas para esse tutorial estou usando ele como exemplo, mas poderia ser qualquer outro banco relacional suportado pelo KnexJS.

## Instalação

Após obter o projeto faça a instalação das dependências executando o comando

<pre>
$ npm install
</pre>

pelo terminal na raiz do projeto

## Configuração

Na raiz do projeto crie o arquivo `.env` e defina as seguintes variaveis de ambiente.

### Banco de Dados

Credenciais do seu banco de dados, como:

<pre>
APP_DB_HOST=localhost
APP_DB_NAME=game_suggestion
APP_DB_USER=root
APP_DB_PORT=3306
APP_DB_PASSWORD=
</pre>

### Chave de Criptografia

Gere um hash sha1 por qualquer aplicação web, por exemplo https://passwordsgenerator.net/sha1-hash-generator/, e atribua a variável de ambiente APP_AUTH_SECRET.

Por exemplo:

<pre>
APP_AUTH_SECRET = D1FE2D6350F52DF617E4E189E9EB330E7E652A75
</pre>

### API IGDB

Acesse https://api.igdb.com/ para conseguir a sua chave de acesso ao web service e atribua ela a variável de ambiente APP_IGDB_KEY.

Por exemplo:

<pre>
APP_IGDB_KEY =
</pre>

## Criação do Banco de Dados

Na Raiz do projeto execute

<pre>$ npx knex migrate:latest</pre>

para o knex criar as tabelas do seu banco de dados

## Uso

Finalmente execute o comando

<pre>
$ npm start
</pre>

para executar o backend.

Se tudo estiver certo acesse http://localhost:4000/ e a ferramenta de debug do apollo server deve aparecer.

Acesse https://github.com/samuelmarcos-cpu/game-suggestion-frontend para incorporar o frontend.
