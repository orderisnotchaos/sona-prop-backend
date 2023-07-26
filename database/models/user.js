

module.exports = (sequelize, dataTypes) =>{

    const alias = 'User';

    const cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoincrement:true,
            allowNull:false,

        },
        name:{
            type:dataTypes.STRING,
            allowNull:false
        },
        password:{
            type:dataTypes.STRING,
            allowNull:false
        }
    }

    const config = {
        tableName:'user',
        timestamps:false,
        underscored:false
    }

    const User = sequelize.define(alias,cols,config);

    return User;
}