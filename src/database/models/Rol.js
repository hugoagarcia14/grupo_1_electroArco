module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT(100).UNSIGNED,
            allowNull: false
        }    
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'roles'
    }
    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = function (models){
       Rol.hasMany(models.Rol,{
        as:'users',
        foreignKey:'roles_id'
       }); 
    }

    return Rol
};