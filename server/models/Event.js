module.exports = (sequelize, DataTypes) => {

    const Events = sequelize.define("Events", {
        eventid: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deaths: {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull:true
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trend:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url1: {
            type: DataTypes.STRING, 
            allowNull:true,
        },
        url2: {
            type: DataTypes.STRING, 
            allowNull:true,
        },
        url3: {
            type: DataTypes.STRING, 
            allowNull:true,
        }
    });

    Events.associate = (models) => {
        Events.hasOne(models.RelatedMedia, {
            onDelete: 'cascade',
        });
        Events.hasOne(models.Statistics, {
            onDelete: 'cascade',
        });
    }
    return Events
}