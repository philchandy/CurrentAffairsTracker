const express = require('express');
const router = express.Router();
const { Statistics } = require("../models");

router.get('/:EventId', async (req,res) => {
    const eventId = req.params.EventId
    const stats = await Statistics.findAll({where: { EventId: eventId }});
    res.json(stats);
})

router.post('/', async (req,res) => {
    const statistics = req.body;
    await Statistics.create(statistics);
    res.json(statistics);
})

module.exports = router