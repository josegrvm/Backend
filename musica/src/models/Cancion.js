import mongoose from "mongoose";

const cancionSchema = new mongoose.Schema(
    {
        titulo: {
        type: String,
        required: [true, "El título es obligatorio"],
        minlength: [6, "El título debe tener al menos 6 caracteres"],
        maxlength: [255, "El título no puede exceder 255 caracteres"],
        },
        artista: {
        type: String,
        required: [true, "El artista es obligatorio"],
        minlength: [10, "El nombre del artista debe tener al menos 10 caracteres"],
        maxlength: [255, "El nombre del artista no puede exceder 255 caracteres"],
        },
        anioLanzamiento: {
        type: Number,
        required: [true, "El año de lanzamiento es obligatorio"],
        validate: {
            validator: (v) => /^\d{4}$/.test(v),
            message: "El año de lanzamiento debe tener 4 dígitos",
        },
        },
        genero: {
        type: String,
        required: [true, "El género es obligatorio"],
        },
    },
    {
        timestamps: true,
    }
);

export const Cancion = mongoose.model("Cancion", cancionSchema);