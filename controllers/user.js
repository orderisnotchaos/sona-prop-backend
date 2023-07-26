const { Op } = require('sequelize');
const db = require('../database/models/index');

module.exports = {

    login : async (req,res) =>{

        const user = await db.User.findOne({where:{[Op.and]:{name:req.body.userName,password:req.body.password}}});

        if(user) return res.status(200).json({token:123, ok:true});

        return res.status(400);
    }
};