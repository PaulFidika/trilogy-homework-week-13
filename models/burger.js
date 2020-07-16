module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define('Burger', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alreadyEaten: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return Burger;
};