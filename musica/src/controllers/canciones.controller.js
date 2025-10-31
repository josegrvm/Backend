import { Cancion } from "../models/cancion.js";

export const crearCancion = async (req, res) => {
    try {
        const nuevaCancion = await Cancion.create(req.body);
        res.status(201).json(nuevaCancion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const obtenerCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();
        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener canciones" });
    }
};

export const obtenerCancionPorId = async (req, res) => {
    try {
        const cancion = await Cancion.findById(req.params.id);
        if (!cancion) return res.status(404).json({ error: "Canción no encontrada" });
        res.json(cancion);
    } catch {
        res.status(400).json({ error: "ID inválido" });
    }
};

export const actualizarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        });
        if (!cancion) return res.status(404).json({ error: "Canción no encontrada" });
        res.json(cancion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const eliminarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id);
        if (!cancion) return res.status(404).json({ error: "Canción no encontrada" });
        res.json({ mensaje: "Canción eliminada correctamente" });
    } catch {
        res.status(400).json({ error: "ID inválido" });
    }
};