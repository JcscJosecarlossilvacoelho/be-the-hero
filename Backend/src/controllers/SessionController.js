const db = require('../database/connection');
module.exports={
    async create(request,response){
           const {id} = response.body;
           const ong = await db('ongs').where('id',id).select('name').first();
           if(!ong){
               return response.status(400).json_({error:'No ONG found with this ID'})
           }

           return response.json(ong)
    }
}