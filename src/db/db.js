import { Sequelize } from "sequelize";


export const conect = new Sequelize('series' , 'LautaroCruz' , 'Lautaro18!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})
async function dbconect(){
    try {
    const response = await conect.sync();
    console.log("Conexión a la base de datos establecida correctamente.");
    if(response){
        return response;
    }
    } catch (error) {
        console.error("Error al conectar a la base de datos: " + error.message);
    }
    
}

export default dbconect;



