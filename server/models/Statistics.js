module.exports = (sequelize, DataTypes) => {

    const Statistics = sequelize.define("Statistics", {
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deaths: {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        monetaryAid: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    })

    return Statistics
}