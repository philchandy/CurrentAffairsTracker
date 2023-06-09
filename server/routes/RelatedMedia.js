const express = require('express');
const router = express.Router();
const { RelatedMedia } = require("../models");
const Twitter = require('twitter');


const client = new Twitter({
    consumer_key: '8EhB23B4DRXSeZnRbTtjI5FgJ',
    consumer_secret: 'qlvEhRGnPXB8YJogjNdEnWKJW2y2vHdcMO6DbyCd5tPnDzRZ0Q',
    access_token_key: '1650630159681179672-BkmjQZiuXgA3rYndoO8HzlDcsvGFNu',
    access_token_secret: 'zcAq5boC9bKgwxp1VDwVxLA1ncJrxzpW2NtdtgHd4iCvH'
  });

router.get('/:EventId', async (req,res) => {
    const eventId = req.params.EventId
    const relatedMedia = await RelatedMedia.findAll({where: { EventId: eventId }});
    res.json(relatedMedia);
})

router.post('/', async (req,res) => {
    const Tag = req.params.tag 
    console.log(Tag)
    
    client.get('search/tweets', {q: '#'+Tag, count: 100}, function(error, tweets, response){
        if(!error){
            const count = tweets.statuses_count;
            console.log(`Number of tweets for #${Tag}: ${count}`);

            RelatedMedia.create({twitterPosts: count,  hashtag: Tag})
                .then(tweet => {
                    console.log(`Tweet inserted with id ${tweet.id}`);
                })
                .catch(error => {
                    console.error(error);
                });
            res.json({ hashtag: Tag, twitterPosts: count});
        } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error'});
        }
    });
});

// router.post('/', async (req,res) => {
//     const media = req.body;
//     await RelatedMedia.create(media);
//     res.json(media);
// })

module.exports = router