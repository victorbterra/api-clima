import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.js";
import cors from "cors";

// CARREGAR VARIAVEIS DE AMBIENTE
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// HABILITAR CORS
app.use(cors());

// CONVERSÃO PARA JSON
app.use(express.json());

// ROTAS

app.use("/api/weather", weatherRoutes);

// INICIAR O SERVIDOR

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
