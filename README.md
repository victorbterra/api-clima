
# API de Clima 🌤️

Projeto de estudo de uma API simples para retornar ao usuário dados climáticos devidamente tratados de uma cidade utilizando a API da OpenWeather.

## 🚀 Tecnologias Utilizadas

- Node.js

- Express.js

- Axios

- Dotenv



## 📌 Funcionalidades:
- Buscar informações climáticas de uma cidade informada pelo usuário.
- Retornar temperatura e descrição do clima atual.
- Suporte para temperatura em Celsius e idioma em português.

# ⚙️ Configuração e Instalação

1️⃣ Clone o Repositório e entre no diretório do projeto.

```
git clone https://github.com/seu-usuario/api-clima.git
cd api-clima

```

2️⃣ Instale as dependências:

```
npm install
```

3️⃣ Configurar variáveis de ambiente

```
OPENWEATHER_API_KEY= SUA_CHAVE_API_AQUI
PORT=3000
```
🔑 Obs: Para obter uma chave de API, cadastre-se no OpenWeather: https://home.openweathermap.org/

## ▶️ Como Executar o Projeto

Para rodar o servidor, use o seguinte comando:

```
npm run dev
```
Ou, caso queira rodar sem nodemon:

```
node src/app.js
```
O servidor será iniciado na porta definida no .env, ou na porta 3000 por padrão.
# 🌎 Endpoints da API

🔹 Obter dados do clima por cidade

- Rota: ```METODO GET: /api/weather/:city ```

📥 Parâmetros:

- ```city ``` (string) → Nome da cidade a ser buscada.

📤 Exemplo de Requisição:

```
GET http://localhost:3000/api/weather/São Paulo
```

🔄 Resposta esperada:

```
{
    "cidade": "Rio de Janeiro",
    "temperatura": 32.88,
    "sensacaoTermica": 36.92,
    "minima": 32.78,
    "maxima": 33.97,
    "descricao": "algumas nuvens"
}
```
## 📄 Licença

- Este projeto está licenciado sob a MIT License. Sinta-se à vontade para utilizá-lo e modificá-lo! 😊
## 👨‍💻 Autor

Desenvolvido por [Victor Terra](https://victorterradev.com/) 🚀.