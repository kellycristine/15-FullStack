Chegou a hora de colocar em prática os conhecimentos vistos em aula.
Neste exercício vamos explorar a integração do nosso front-end com a API
de Recados que foi construída no módulo anterior. Além disso, será
proposto um desafio que envolve pesquisa 🔬 e desenvolvimento 💻.
Cenário
Você está trabalhando em uma equipe de front-end da Growdev e um
cliente solicitou a criação de uma interface web para o seu sistema de
recados. O analista deixou você encarregado(a) de implementar a
página de Login dos usuários cadastrados na API.

Construa uma página HTML que deverá ser usada para realizar o login de
um usuário da API de Recados. O Login deverá ser composto por dois
campos de formulário (username/email e senha) e por dois botões (Login
e Cadastre-se).

Regras
1. Crie uma página HTML com os campos citados na descrição do
exercício.
2. Ambos os campos são obrigatórios.
3. Não se preocupe muito com a estilização da página; o foco da
tarefa é a funcionalidade.
4. Não é necessário adicionar funcionalidade para o botão
“Cadastre-se”, mas ele deverá constar na página.
5. Crie um evento para submeter o Login ao clicar no botão “Login”.
6. Crie uma função Javascript para tratar o evento e para submeter o
formulário de Login.
7. Construa a integração da página com o Login do back-end que foi
desenvolvido nos módulos anteriores.

8. Em caso de sucesso: direcione o cliente para a tela da lista de
recados.
9. Em caso de erro: Mostre um alerta informando o erro.
10. Não submeta o formulário se algum dos campos não possui valor.

DESAFIO 🔬
A funcionalidade de Login possibilita que determinado usuário entre com
suas credenciais e acesse apenas os seus recados. Além disso, o login
evita que outros usuários vejam o recado de um cliente específico. Para
garantir isso, é necessário criar um mecanismo de sessão.

Após receber um retorno de sucesso no login, é preciso armazenar a
sessão do usuário logado. Já na tela de lista de recados, é necessário
identificar qual é o usuário que fez o login (e também, muito importante,
se há algum usuário logado) através da sessão.

Em um front-end simples, o controle de sessão pode ser feito usando o
recurso localStorage do Javascript. Com ele, é possível armazenar
informações no navegador que podem ser usadas em diferentes páginas.
Há diversas formas de armazenar uma “sessão” com localStorage (isto é,
podemos usar diferentes dados para representar a sessão. Pesquise e use
a forma que achar mais eficiente para sua aplicação.

Regras
1. Pesquise a respeito do localStorage, seu funcionamento, suas
vantagens e principais comandos para armazenamento das
informações.
2. Utilize os conteúdos adicionais postados no classroom para esta
pesquisa.
3. Utilize o localStorage para criar um mecanismo de sessão após o
login do usuário na tela de Login.

4. Após retorno de sucesso do Login, guarde a sessão do usuário antes
de direcionar para a tela de lista de recados.
5. Não deixe um usuário não logado acessar a tela de lista de recados;
direcione de volta para a tela de login neste caso.
6. Caso um usuário logado acesse a tela de lista, obtenha seu ID a
partir da sessão para listar apenas os seus recados.

Atenção aos prazos
Os prazos para o desenvolvimento da aplicação e para o desafio são
diferentes:

● Apresentação da pesquisa sobre localStorage: próxima aula com o
mentor.
● Apresentação do andamento do trabalho (checkpoint): próxima
aula com o mentor.
● Desenvolvimento da aplicação: final do módulo.
Bora growdevers 🚀