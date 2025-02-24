import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

const getWeather = async (city) => {
  //endpoint do site openweather
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    // usando axios para fazer a requisição GET ao endpoint do openweather
    const response = await axios.get(BASE_URL, {
      //tratamento dos dados para portugues do brasil e a unidade de celsius
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Celsius
        lang: "pt_br", // Português
      },
    });

    // RETORNANDO OS DADOS DO CLIMA DA CIDADE PESQUISADA

    const { name, main, weather, wind,dt } = response.data;
    return {
      cidade: name,
      data:new Date(dt * 1000).toLocaleDateString("pt-BR"),
      temperatura: main.temp,
      descricao: weather[0].description,
      icone: weather[0].icon,
      umidade: main.humidity,
      velVento: wind.speed,
    };
  } catch (error) {
    console.error("Erro na requisição dos dados:", error.message);
    return null;
  }
};

const getForecast = async (city) => {
  // endpoint do site openweather
  const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  try {
    // usando axios para fazer a requisição GET ao endpoint do openweather
    const response = await axios.get(BASE_URL, {
      // tratamento dos dados para portugues do brasil e a unidade de celsius
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Celsius
        lang: "pt_br", // Português
        cnt: 7, // Quantidade de previsões
      },
    });
    // RETORNANDO AS PREVISOES DO CLIMA DA CIDADE PESQUISADA
    return {
      previsoes: response.data.list.map((item) => ({
        data: new Date(item.dt * 1000).toLocaleDateString("pt-BR"),
        icon: item.weather[0].icon,
        temperatura: item.main.temp,
      })),
    }
  } catch {
    console.error("Erro na requisição das previsões:", error.message);
    return null;
  }
};

export { getWeather, getForecast };