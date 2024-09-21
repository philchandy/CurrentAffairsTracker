// models/hashtag.js
module.exports = (sequelize, DataTypes) => {

    const Hashtag = sequelize.define('Hashtag', {
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Hashtag;
}