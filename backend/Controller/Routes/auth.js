/* eslint-disable no-unused-vars */
const route = require('express').Router()
const userModel = require('../../Model/userModel')

route.post('/user', (req, res) => {
    userModel.create(req.body).then((user) => {
        if (!user) return res.status(400).send('There was an error')
        res.send('Created a New User')
    })
    .catch((error) => res.status(400).send(error))
})
route.put('/user', (req, res) => {
    const {_id, name, password, role} = req.body
    userModel.findByIdAndUpdate(_id).then((user) => {
        if (!user) return res.status(400).send('No User Found')
        res.send('User Updated')
    })
        .catch((error) => {
            if (error) res.status(400).send(error)
        })
})
    .post('/', (req, res) => {
        userModel.findOne(req.body).then((user) => {
            if (!user) return res.status(400).send('Incorrect email or password')
            res.cookie('user', user)
            res.send(true)
        })
        .catch((error) => {
            if (error) res.status(400).send(error)
        })
    })
    .get('/', (req, res) => {
        userModel.find().then((user) => {
            if (!user) return res.status(400).send('No Users')
            res.send(user)
        })
        .catch((error) => {
            if (error) res.status(400).send(error)
        })
    })

    module.exports = route