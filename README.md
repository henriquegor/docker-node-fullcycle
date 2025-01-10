# Desafio do curso Full Cycle
Contexto : Criar uma app Nodejs que mostre "Full Cycle Rocks" e os nomes cadastrados dentro do banco mysql, isso com um servidor nginx realizando o proxy reverso

# Docker Hub Links
[Node](https://hub.docker.com/repository/docker/henriquegor/node-app/general)

[Mysql](https://hub.docker.com/repository/docker/henriquegor/mysql-node/general)

[Nginx](https://hub.docker.com/repository/docker/henriquegor/nginx-node/general)

# O que foi feito?
## Mysql:
Foi criado a imagem do banco de dados utilizando o arquivo init.sql copiando o para a pasta /docker-entrypoint-initdb.d/ assim realizando a inicialização do banco com as tabelas necessárias.
## Node
Foi criado o app que deleta todas as informações da tabela primeiro para depois criar apenas alguns nomes e exibir isso na tela. Na imagem foi colocado o npm i para que instale todas as dependencias antes de iniciar o projeto para que o volume colocado no docker compose não substitua a pasta removendo o node_modules foi apontado o volume para a pasta src assim instalando o node_modules uma pasta acima e não tendo problemas para rodar a imagem.
## Nginx
Foi criado o arquivo de conf onde no proxypass é passado o app com a porta que ele irá ficar exposto para que o nginx conseguia conectar nele
## Docker Compose
Com o docker compose foi possível subir as 3 imagens com a dependencia entre elas assim o node aguarda o banco de dados subir para que ele execute os comandos dentro do banco de dados e inicie.
