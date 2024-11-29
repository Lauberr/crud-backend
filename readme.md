# Desenvolvimento Web 2

Backend exemplo para a disciplina de Desenvolvimento Web 2


## Configuração do projeto

Inicie o projeto 
```bash
npm init -y
```

Crie arquivo `.gitignore` e adicione as seguintes entradas: 
- pasta `node_modules`
- arquivo `.env` (explicado a seguir)

```text
node_modules
.env
```

Alterar o formato de importação/exportação do node no arquivo `package.json`. Essa alteração permite que utilizemos o `import` em vez de `require`.

```json
"type": "module",
```

## Dependências

Para esse projeto, vamos utilizar as seguintes dependências:

- [`fastify`](https://fastify.dev/): Framework web para construir APIs e servidores HTTP.
- [`@fastify/cors`](https://github.com/fastify/fastify-cors): Plugin oficial do fastify que provê suporte para CORS (Cross-Origin Resource Sharing) à aplicação. Ele permite que o servidor controle quais origens têm permissão para acessar os recursos da API.
- [`postgres`](https://www.npmjs.com/package/postgres): Biblioteca para estabelecer conexão com o banco de dados Postgresql
- `dotenv`: Biblioteca para utilizar variáveis de ambiente


```bash
npm install fastify
npm install @fastify/cors
npm install postgres
npm install -D dotenv
```

Crie o script `dev` no `package.json` para facilitar a execução do servidor.

```json
 "scripts": {
    "dev": "node --watch server.js"
  },
```

Criar o arquivo `.env` do diretório raíz para e preencher as variáveis de ambiente.
Preencha a porta e a URL do banco de dados. 

```
PORT=
URL=""
```


## Banco de Dados

Crie um banco de dados na [Neon.tech](https://neon.tech/). Depois de criado, copie a URL de conexão com seu banco de dados na variável de ambiente `URL`.



## Extensões

Instale a extenção `REST Client` para criar arquivos de teste do servidor.

