import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.js";
import cors from "cors";

// CARREGAR VARIAVEIS DE AMBIENTE
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// HABILITAR CORS
app.use(cors({
  origin: "*", // permitir todos os domínios
  credentials: true, // permitir que os cookies sejam transmitidos
  methods: ["GET"], // permitir apenas GET
  allowedHeaders: ["Content-Type", "Authorization"], // permitir os cabeçalhos Content-Type e Authorization
 
}));


// CONVERSÃO PARA JSON
app.use(express.json());

// ROTAS

app.use("/api/weather", weatherRoutes);

// INICIAR O SERVIDOR

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
