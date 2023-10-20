import { Sequelize, DataTypes  } from "sequelize";
import { conect } from "../db/db.js";


const serieTable = conect.define("stock" ,{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo : DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fechaEstreno: DataTypes.DATE,
    estrellas: DataTypes.INTEGER(11),
    genero: DataTypes.STRING,
    precioAlquiler: DataTypes.DECIMAL(10,2),
    atp: DataTypes.BOOLEAN,
    estado: DataTypes.STRING(2),
},{
    timestamps: false,
});



export default serieTable;