module.exports = (sequelize, DataTypes) => {

    const RelatedMedia = sequelize.define("RelatedMedia", {
        // redditPosts: {
        //     type: DataTypes.INTEGER,
        //     allowNull:true
        // },
        twitterPosts: {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        hashtag: {
            type: DataTypes.STRING,
            allowNull:true
        }
        // nytArticles: {
        //     type: DataTypes.INTEGER,
        //     allowNull:true
        // },


    })

    return RelatedMedia
}