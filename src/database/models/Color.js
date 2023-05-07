module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT(100),
            allowNull: false
        }    
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'colors'
    }
    const Color = sequelize.define(alias, cols, config);
    
    Color.associate = function(models){
        Color.belongsToMany(models.Product,{
        as:'products',
        through:'products_colors',
        foreignKey:'colors_id',
        otherKey:'products_id'
    });
}
    return Color
};