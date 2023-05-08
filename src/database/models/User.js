module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        first_name: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        email: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        phone: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        address: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT(100),
        },
        roles_id: dataTypes.INTEGER(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Rol,{
            as:'rol',
            foreignKey:'roles_id'
        });
    }

    return User
};