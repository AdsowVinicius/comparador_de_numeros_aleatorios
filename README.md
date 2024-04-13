#  Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e FATEC

#Sistema de verificação de numero

###Como foi desenvolvido

O projeto foi desenvolvido principalmente e quase inteiramente em JavaScript com ressalva no executável que foi em HTML, portanto o programa irá funcionar em uma página WEB por meio do arquivo index.html. O sistema oferece um número randômico até 10 mil que pode ser alterado facilmente alterando as propriedades da variável num1 no código fonte(arquivo script.js, dentro da pasta src), seu objetivo é adivinhar o número seguindo as dicas oferecidas pelo aplicativo.

A ferramenta escolhida para o desenvolvimento foi o Visual Studio Code, respeitando a seguinte estrutura de pastas e arquivos:

src/
script.js
index.html
.gitignore
README.md



###Explicação das funções

O código foi desenvolvido da forma mais sucinta e objetiva porem visando sempre cobrir todas as exigências que eram:
1.	Desenvolva o código, que deverá conter as seguintes características:
o	solicite ao usuário que insira um número de no mínimo quatro dígitos;
o	verifique se o número inserido é maior ou menor que o valor esperado (que pode ser fixo ou randômico);
o	caso seja o valor correto, imprima na tela uma mensagem de parabéns;
o	caso contrário, indique ao usuário se o próximo valor deve ser maior, muito maior, menor ou muito menor que o informado.
Para isso desenvolvi 4 funções que são: randomnumber, checarnum, validnum e varificarnum. 

função randomnumber: Serve para gerar um número aleatório através de uma função o que facilita para atualizar os intervalos que podem gerar os números randômicos que serão atribuídos a let num1 posteriormente. 

função checarnum: verifica se o número inserido e um número ou não, caso ele não seja será retornado uma mensagem para o usuário o alertando e solicitando que ele insira novamente, caso contrário ele irá para função validnum.

função validnum: esta função verifica se os números digitados tem no mínimo 4 dígitos, caso ele não tenha retornara uma mensagem alertando o porquê do erro e solicitara novamente o número, caso contrario ele irá iniciar a função varificarnum só que com a variável let diff e não com resp.
Função verificarnum: esta função verifica a variável let diff que uma diferença de entre num1(numero randon) e a resp (valor inserido pelo usuário) e assim dando as dicas da seguinte forma 

###Como utilizar o sistema


Ao abrir o programa, uma caixa de alerta será disponibilizada com a mensagem " "digite um número com no mínimo 4 dígitos o número sorteado foi o de " +num1(essa mensagem pode ser mudada pois esta mostrando o número para testes práticos na hora da avaliação), e com um espaço para o usuário insira um número.

O primeiro passo é citar um número válido. Depois, uma nova mensagem aparecerá, sendo uma dica, ou uma mensagem de parabéns pelo acerto.

As dicas serão:

Você terá que inserir um número menor do que o já inserido.
Você terá que inserir um número muito menor do que o já inserido.
Você terá que inserir um número maior do que o já inserido.
Você terá que inserir um número muito maior do que o já inserido

O "muito" aparece antes do "maior" ou "menor" no alerta, se a diferença entre o palpite e o número correto for mais que 100.


