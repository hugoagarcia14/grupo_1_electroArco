module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT(100).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT().UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11,2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(10),
        },
        image: {
            type: dataTypes.TEXT(100),
        },
        categories_id: dataTypes.INTEGER(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'products'
    }
    const Product = sequelize.define(alias, cols, config);

        Product.associate = function(models){
            Product.belongsTo(models.Category,{
                as: 'category',
                foreignKey:'categories_id'
            });

        Product.belongsToMany(models.Color,{
            as:'colors',
            through:'products_has_colors',
            foreignKey:'products_id',
            otherKey:'colors_id'
        });
        }

    return Product
};