-- PRINCIPAIS COMANDOS SQL

--CREATE 
-->Usado para criar, seja um database, seja uma tabela. 
--Qualquer coisa que for criada no banco de dados, será
--utilizado o Create
--EX:
--Criado database
-- CREATE database app; -->assim como javascript, os códigos terminam em ';'

--criando e configurando tabela
--create table usuarios(
    --id int primary_key auto_increment; -->criando um identificador(boa pratica)
   --nick VARCHAR(100) not null,
--     age BIT,
--     game: VARCHAR(100) not null,

-- );

--INSERT
-->Usado para inserir dados a alguma table dentro de alguma database
--EX:
-- INSERT into usuarios (nick, age, category) values ('josh', 19, 'COD');

-->Esse dado será inserido em uma table e que para que funcione, o dev
--deve estar conectado ao sql dentro de uma database


--UPDATE
-->Usado para atualizar um dado em uma table 
--EX:
-- UPDATE usuarios set nick = 'Bush_20' where id = '' --> geralmente todo dado possui uma ID

--DELETE
-->Usado para deletar dados,tabelas e databases
--EX:
-- DELETE from usuarios where id - ''; --> se não houver no codigo o comando 'where' seguido de um ID, ele vai deletar TODA A TABELA. OU SEJA! CUIDADO!

--SELECT
-->Usado para consultar dados de alguma table dentro de uma database
--EX: 
-- SELECT * from usuarios; -> vai puxar toda uma tabela

--SELECT * from usuarios where id = '' -> vai puxar elemento especifico da tabela

--SELECT * from usuarios where nome like '%rohy% -> vai puxar elemento especico da tabela mesmo que o nome esteja errado