import { json } from "sequelize";
import serieTable from "../schema/series.js";

export const getSeries = async (req, res) => {
  try {
    const response = await serieTable.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error en la consulta de series" });
  }
};

export const getSerie = async (req,res) =>{
    try {
        const idToGet = req.params.id;
        const response = await serieTable.findOne({
            where:{
                id: idToGet
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Error en la consulta de series" });
    }
}

export const createSeries = async (req, res) => {
    try {
        const {
            titulo,
            descripcion,
            fechaEstreno,
            estrellas,
            genero,
            precioAlquiler,
            atp,
          } = req.body;
          
         const response = await serieTable.create({
            titulo: titulo,
            descripcion: descripcion,
            fechaEstreno: fechaEstreno,
            estrellas: estrellas,
            genero : genero,
            precioAlquiler : precioAlquiler,
            atp : atp,
            estado: "A",
          });
          res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  
};

export const updateSeries = async (req, res) => {
    try {
        const idToUpdate = req.params.id;
        const serieUpdate = req.body;
        const serie = await serieTable.findByPk(idToUpdate);
        if(serie){
            serie.titulo = serieUpdate.titulo,
            serie.descripcion = serieUpdate.descripcion,
            serie.fechaEstreno =  serieUpdate.fechaEstreno,
            serie.estrellas =  serieUpdate.estrellas,
            serie.genero = serieUpdate.genero,
           serie.precioAlquiler = serieUpdate.precioAlquiler,
            serie.atp = serieUpdate.atp,
            serie.estado = serieUpdate.estado
        }else{
            res.status(404).json({ error: 'Registro no encontrado' });
        }
        const response = await serie.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  
};
export const deleteSeries = async (req, res) => {
    try {
        const idToDelete = req.params.id;
      const response =  await serieTable.destroy({
        where: {
            id:idToDelete
        },});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  
};
