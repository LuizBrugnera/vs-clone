# VSCLONE

VSCLONE é um clone simples do Visual Studio Code, criado como uma aplicação web interativa. Ele oferece funcionalidades básicas de um editor de código, permitindo que os usuários editem, visualizem, e baixem arquivos de projetos diretamente pelo navegador.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário dinâmicas.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de utilitários para estilização rápida e responsiva.
- **Monaco Editor**: Editor de código que alimenta o Visual Studio Code.
- **JSZip e FileSaver**: Para manipulação de arquivos e criação de downloads zip no navegador.

## Funcionalidades

- **Editor de Código**: Interface interativa com suporte para múltiplas linguagens de programação.
- **Importação de Pastas**: Permite que os usuários importem estruturas de pastas e arquivos para dentro do editor.
- **Download de Projetos**: Capacidade de baixar o projeto completo em um arquivo `.zip`.
- **Renderização Rápida**: O VSCLONE é otimizado para carregar e renderizar rapidamente.

## Deploy

O projeto está disponível online e pode ser acessado em:

[VSCLONE - Deploy](https://vs-clone-one.vercel.app/)

## Instalação

Siga as etapas abaixo para rodar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/LuizBrugnera/vs-clone
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd vs-clone
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Rode o projeto em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Acesse o projeto no navegador:

    ```bash
    http://localhost:3000
    ```

## Build para Produção

Para gerar o build de produção e iniciar o servidor:

1. Execute o comando para gerar o build:

    ```bash
    npm run build
    ```

2. Inicie o servidor de produção:

    ```bash
    npm run start
    ```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, novas funcionalidades, ou correções. Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça as alterações necessárias.
4. Envie um pull request.
