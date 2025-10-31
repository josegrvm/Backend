import express from "express";
import cors from "cors";
import cancionesRoutes from "./routes/canciones.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/canciones", cancionesRoutes);

app.get("/", (req, res) => {
    res.send("🎵 API de Música con Mongoose funcionando correctamente");
});

export default app;