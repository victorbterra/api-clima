// CONFIGURAÇÕES DAS ROTAS PARA OBTER O CLIMA
import express from 'express';
import { getWeather } from '../services/weatherService.js';

const router = express.Router();

// ROTA para buscar o clima por cidade

router.get('/:city', async (req, res) => {
    const {city} = req.params;
    try {
        const weatherData = await getWeather(city);
        res.status(200).json(weatherData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erro ao buscar os dados do clima.'});
    }
});

export default router;