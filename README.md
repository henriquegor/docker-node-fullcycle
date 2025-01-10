# Desafio do curso Full Cycle
Contexto : Criar uma app Nodejs que mostre "Full Cycle Rocks" e os nomes cadastrados dentro do banco mysql, isso com um servidor nginx realizando o proxy reverso

# Docker Hub Links
[Node](https://hub.docker.com/repository/docker/henriquegor/node-app/general)
[Mysql](https://hub.docker.com/repository/docker/henriquegor/mysql-node/general)
[Nginx](https://hub.docker.com/repository/docker/henriquegor/nginx-node/general)

# Como foi resolvido?
Principais maneiras utilizadas para diminuir o tamanho da imagem foram:

1- Utilizar a imagem scratch que é a imagem vazia do Docker Hub

2- Realizar o build do arquivo para gerar o arquivo binário assim não havendo necessidade de termo o Golang instalado na imagem

3- No momento de realizar o build no golang utilizar as flags -ldflags="-s -w" para diminuir o tamanho do arquivo