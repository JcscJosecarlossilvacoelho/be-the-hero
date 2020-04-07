
const db = require('../database/connection');
module.exports = {
  async index(resquest,response){
        const ong_id = resquest.header.authorization;
        const incidentes = await db('incidents').where('ong_id',ong_id).select('*');
        return response.json(incidentes)
  }

}