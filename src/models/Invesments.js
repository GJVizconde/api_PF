const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Invesment',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            contribution:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: true,
            },
           
        },
        { timestamps: false }
    );
};