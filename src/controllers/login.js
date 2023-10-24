import dbconect from '../db/db.js'

export const postLogin = async (req, res) => {
  try {
    dbconect(req.body);
  } catch (error) {
    
  }
}