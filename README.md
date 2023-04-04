#Olá!

Esta é a parte Front End do projeto desenvolvido para o teste técnico da MyPharma.

Link do deploy:

https://my-pharma.vercel.app/

Para clonar o repositório digite o seguinte comando em um terminal git:

git clone git@github.com:viniciusgrp/MyPharma-FrontEnd.git

Para o funcionamento desse projeto localmente se faz necessária a execução do back end (API), para isso clone o seguinte repositório e siga os passos do README presente nele:

https://github.com/viniciusgrp/MyPharma-BackEnd

Comando para clonar o repositório:

git clone git@github.com:viniciusgrp/MyPharma-BackEnd.git

Após seguir TODOS os passos do README do back end:

1 - Abra o terminal e instale as dependencias, rode o seguinte comando:
yarn install

2 - Vá em src/services/api.js e comente a linha 5 e descomente a 4, se necessário ajuste a URL para a qual a API está rodando localmente.

3 - Execute o servidor rodando o seguinte comando no terminal:
yarn dev

4 - Se tudo estiver certo aparecerá algo similar no terminal:
➜ Local: http://127.0.0.1:5173/
➜ Network: use --host to expose
➜ press h to show help

Segure CTRL e clique com o botão esquerdo do mouse em http://127.0.0.1:5173/ (ou similar)

====================== Informações ======================

Tecnologias utilizadas nesse projeto:

React / Styled-Components / Axios / react-router-dom / react-loading-skeleton / react-icons / vite

Funções:
Filtragem por nome do produto e categoria;
Ordenação por nome ou preço;
Paginação;
Seleção de quantidade de produtos por página;
Carrinho com opções de aumentar e diminuir a quantidade de produtos;
Carrinho armazenado no localstorage, assim mesmo que o usuario saia / feche o site, ao retornar os produtos ainda permanecerão no carrinho;

Observações extras:

Design não é meu ponto forte, considero que ficou um projeto de design simples pois foquei em deixar funcional.

Minha preferência é de seguir um design feito por um profissional, gosto bastante da ferramenta Figma.

Se pudesse refazer o projeto eu o faria em TypeScript, optei por fazer em JavaScript por pensar que economizaria o tempo de fazer as tipagens e poderia focar em outras coisas que impactariam o usuário final, mas ao meio do projeto percebi que foi um equívoco, valeria a pena perder alguns minutos tipando o projeto.
