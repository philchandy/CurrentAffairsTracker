const express = require('express');
const router = express.Router();
const { Events } = require("../models");


// const Twitter = require('twitter');


// const client = new Twitter({
//     consumer_key: '8EhB23B4DRXSeZnRbTtjI5FgJ',
//     consumer_secret: 'qlvEhRGnPXB8YJogjNdEnWKJW2y2vHdcMO6DbyCd5tPnDzRZ0Q',
//     access_token_key: '1650630159681179672-BkmjQZiuXgA3rYndoO8HzlDcsvGFNu',
//     access_token_secret: 'zcAq5boC9bKgwxp1VDwVxLA1ncJrxzpW2NtdtgHd4iCvH'
// });

// const trackHashtag = async (tag) => {
//     const params = { track: tag };
//     const stream = client.stream('statuses/filter', params);
//     let count = 0;
  
//     stream.on('data', (tweet) => {
//       count++;
//     });
  
//     stream.on('error', (err) => {
//       console.error(err);
//     });
  
//     setInterval(() => {
//       const data = { tag: tag, count: count };
//       Hashtag.create(data)
//         .then(() => console.log(`Inserted ${count} tweets for #${tag}`))
//         .catch((err) => console.error(err));
//     }, 60000); // insert tweet count every minute
// };

// router.post('/', async (req, res) => {
//     try {
//       const tag = req.body.tag;
//       trackHashtag(tag);
//       res.status(201).json({ message: `Started tracking #${tag}` });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
router.get('/', async (req, res) => {
    const listEvents = await Events.findAll()
    res.json(listEvents)
});

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const event = await Events.findByPk(id);
    res.json(event);
})

// router.post("/", async (req,res) => {
//     const event = req.body;
//     await Events.create(event);
//     res.json(event);
// });
router.post('/', async (req, res) => {
  const eventData = require('./events.json'); // Assuming the JSON file is in the same directory as this file
  
  Events.bulkCreate(eventData)
    .then(() => {
      res.send('Data inserted into database');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error inserting data into database');
    });
});

module.exports = router