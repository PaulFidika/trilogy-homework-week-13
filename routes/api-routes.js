const db = require("../models")
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let data = await db.Burger.findAll({})
    res.send(data).end()
})

router.post('/', async (req, res) => {
    await db.Burger.create({ name: req.body.burgerName, alreadyEaten: false })
    res.status(201).redirect('/')
})

router.put('/', async (req, res) => {
    await db.Burger.update({ alreadyEaten: true }, {
        where: {
            id: req.body.id
        }
    })
    res.status(204).end()
})

module.exports = router