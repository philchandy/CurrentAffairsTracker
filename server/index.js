const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


const db = require('./models')

//Routers
const eventRouter = require('./routes/events')
app.use("/events", eventRouter);

const relatedMediaRouter = require('./routes/RelatedMedia')
app.use("/RelatedMedia", relatedMediaRouter);

const statisticsRouter = require('./routes/Statistics')
app.use("/Statistics", statisticsRouter);

const hashtagRouter = require('./routes/hashtag')
app.use("/hashtag", hashtagRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

