
# API-REST

Uma aplicação que simula o sistema de uma escola.

## Tecnologias

* Sequelize
* NodeJs
* CORS
* Express

## Projeto Online

- https://api-rest-escola-erik-lopess.herokuapp.com/

## Endpoints

### Autenticações feitas por bearer token.

### Rotas com !, precisam de autenticação

### /auth


* POST - Faz a autenticação no sistema.

    Recebe um body com às seguintes propriedades:

    * Email 
        * String 
        * Obrigatório
    * Password 
        * String
        * Obrigatório

### /user

* PUT ! - Edita o seu usuário.

    Recebe um body com às seguintes propriedades:

    * Nome 
        * String 
        * Opcional
    * Email 
        * String 
        * Opcional
    * Password 
        * String 
        * Opcional

* POST - Cria um usuário.

    Recebe um body com às seguintes propriedades:

    * Nome
        * String
        * Obrigatório
    * Email
        * String
        * Obrigatório
    * Password
        * String
        * Obrigatório

* DELETE ! - Deleta seu usuário.

### /alunos

* GET - Lista todos os alunos do banco de dados.

* GET - Lista somente um aluno.

    Recebe os seguintes parâmetros:

    * id - ID do aluno

* POST ! - Cria um aluno.

    Recebe um body com às seguintes propriedades:

    * Nome        
        * String
        * Obrigatório
    * Sobrenome
        * String
        * Obrigatório
    * Email
        * String
        * Obrigatório
    * Idade
        * Numero Inteiro
        * Obrigatório
    * Peso
        * Numero
        * Obrigatório
    * Altura
        * Numero
        * Obrigatório

* PUT ! - Edita um aluno.

    Recebe os seguintes parâmetros:

    * id - ID do aluno

    Recebe um body com às seguintes propriedades:

    * Nome        
        * String
        * Obrigatório
    * Sobrenome
        * String
        * Obrigatório
    * Idade
        * Numero Inteiro
        * Obrigatório
    * Peso
        * Numero
        * Obrigatório
    * Altura
        * Numero
        * Obrigatório

* DELETE ! - Apaga um aluno.

    Recebe os seguintes parâmetros:

    * id - ID do aluno

### /images

* POST ! - Adiciona uma imagem a um aluno.

   Recebe um body com às seguintes propriedades:

   * aluno_id        
        * Numero
        * Obrigatório
    
   * image
        * JPG/PNG
        * Obrigatório

## Como usar

* Faça o clone do do repositório.
`git clone git@github.com:eriklopess/api-rest.git`

* Instale todas as dependências.

`npm install`

* Insira as variaveis de ambiente da forma indicada no arquivo `example.env`

* Inicie o servidor local.
`npm start`

* Por fim acesse as rotas documentadas acima.
