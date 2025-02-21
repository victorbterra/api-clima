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

    const { name, main, weather } = response.data;
    return {
      cidade: name,
      temperatura: main.temp,
      sensacaoTermica: main.feels_like,
      minima: main.temp_min,
      maxima: main.temp_max,
      descricao: weather[0].description,
    };
  } catch (error) {
    console.error("Erro na requisição dos dados:", error.message);
    return null;
  }
};

export { getWeather };
