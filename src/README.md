#cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar categorias
 

**RN**
  Não deve ser possível cadastrar um carro com uma placa já existente.
  Não deve ser possível alterar placa de veículos.
  Deve ser utilizado o valor padrão para cadastro de carros
  Deve ser adminstrador para fazer cadastros de carros.


  #Listagem de carros

  **RF**
Deve ser possível listar todos carros disponíveis.
Deve ser possível listar todos carros pelo nome.
Deve ser possível listar todos carros pela marca.
Deve ser possível listar todos carros pela categoria.


  **RN**

Deve ser possivel lsitar todos os carros mesmo sem login(cadastro)

#Cadastro de especificação

**RF**
Deve ser possível cadastrar uma especificação para m carro
deve ser possivel lsitar especificações
deve ser possivel lsitar carros

**RN**
Não deve ser possível atribuir ou cadastrar em carros não existentes.
Nâo deve ser possível cadastrar uma especificação já existente para o mesmo carro
  Deve ser adminstrador para fazer cadastros de especificação.

  #Cadastro de imagem do carro
  **RF**
Deve ser possivel cadastrar a imagem do carro.

**RNF**
Utiliza multer para upload de arquivos
  **RN**
  eve ser possivel cadastrar a mais imagens do mesmo carro.
   Deve ser adminstrador para fazer cadastros de imagens.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel
**RN**
Deve ter minimo de 24h a duração do aluguel
Nao deve ser possivel cadastara um novo aluguel caso exista um aberto para o mesmo usuário
Nao deve ser possivel cadastara um novo aluguel caso exista um aberto para o mesmo carro