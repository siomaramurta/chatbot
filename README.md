# Desafio: Integração de API para Chatbot

## Visão Geral

Este repositório contém a solução para o desafio técnico apresentado como parte de um processo seletivo. O objetivo do desafio é criar um chatbot na plataforma Blip e desenvolver uma API RESTful que se integre com a API pública do GitHub para buscar e exibir os cinco repositórios mais antigos de C# da conta GitHub da Take Blip. O chatbot e a API foram desenvolvidos para simular cenários do dia a dia.

## Descrição do Desafio

As principais tarefas deste desafio incluem:

- **Criação do Chatbot**: Construir um chatbot na plataforma Blip, seguindo o fluxo conversacional fornecido.
- **Desenvolvimento da API**: Criar uma API RESTful para buscar dados da API pública do GitHub e retornar os cinco repositórios mais antigos de C#.
- **Integração**: O chatbot deve chamar essa API intermediária para exibir as informações utilizando um componente de carrossel.

## Tecnologias Utilizadas

- **Node.js** (v20.18.0)
- **NPM** (v10.8.2)
- **Express** (v4.21.1)
- **Axios** (v1.7.7)

## Configuração e Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/siomaramurta/chatbot.git

2. Navegue até o diretório do projeto:

   ```bash
   cd chatbot

4. Instale as dependências:

   ```bash
   npm install

5. Inicie o servidor:

   ```bash
   npm start

O servidor estará rodando em http://localhost:3000 e o retorno da api poderá ser consultado em http://localhost:3000/api/repositorios.

## Funcionalidades

- **Integração com Chatbot**: O chatbot foi desenvolvido na plataforma Blip, seguindo o fluxo conversacional proposto no desafio.
- **Funcionalidade da API**: A API busca os cinco repositórios mais antigos de C# da conta GitHub da Take Blip e os retorna em formato JSON.
- **Componente de Carrossel**: O chatbot exibe os detalhes dos repositórios em um carrossel. Cada card inclui:
  - Nome do Repositório
  - Descrição do Repositório
  - Avatar da Blip no GitHub como imagem

## Endpoints da API

- `GET /repositories`: Retorna os cinco repositórios mais antigos de C# da conta GitHub da Take Blip.

## Publicação da API

A API foi publicada utilizando o Google Cloud Platform (GCP) e pode ser acessada no seguinte link:

[https://desafioblip.rj.r.appspot.com/api/repositorios](https://desafioblip.rj.r.appspot.com/api/repositorios)

Isso permite que você teste a funcionalidade da API sem precisar configurar um ambiente local.

### Exemplo de Resposta da API

```json
{
  "itemType": "application/vnd.lime.document-select+json",
  "items": [
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "repo1",
          "text": "Este é o repo1",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "repo2",
          "text": "Este é o repo2",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
  ]
}
