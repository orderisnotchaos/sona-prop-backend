const { Op } = require('sequelize');
const db = require('../database/models/index');

module.exports = {
    index: async (req,res) =>{

        return res.status(200).json({world:'hello'});
    },

}