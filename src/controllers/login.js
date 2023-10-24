import dbconect from '../db/db.js'
import { conect } from '../db/db.js'

export function dataB(server , puerto , database ,usuario ,contraseña){
  const data = {
    server : server,
    puerto : puerto ,
    database : database ,
    usuario : usuario ,
    contraseña : contraseña
  }
  return data;
};
export const datosConexion = dataB();


export const postLogin = async (req, res) => {
  try {
    dataB(req.body.servidor ,  req.body.puerto , req.body.dataBase , req.body.usuario ,req.body.contraseña);

  } catch (error) {
    
  }
}
console.log(datosConexion);