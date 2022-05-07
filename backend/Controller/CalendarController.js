/* eslint-disable no-unused-vars */
const router = require('express').Router()
const Event = require("../Model/Event")
const moment = require('moment')

router.post("/create-event", async (req, res) => {
    const event = Event(req.body)
    await event.save()
    res.sendStatusCode(200)
})

router.get("/get-events", async (req, res) => {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate()}, 
        end: {$lte: moment(req.query.end).toDate()}
    })
    res.send(events)
})

module.exports = router