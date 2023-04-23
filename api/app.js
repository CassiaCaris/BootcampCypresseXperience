const bcrypt = require('bcrypt')
const express = require('express')
const app = express()

app.use(express.json())

const { deleteuser, insertUser } = require('./db')

app.get('/welcome', function (req, res) {
    res.json({ 'message': 'Olá QAx' })
})

app.delete('/user/:email', async function (req, res) {
    const { email } = req.params
    await deleteuser(email)
    res.status(204).end()
})

app.post('/user', async function (req, res) {
    const { name, email, password, is_shaver } = req.body
    const hasPass = await bcrypt.hash(password, 8)
    const user = {
        name: name,
        email: email,
        password: hasPass,
        is_shaver: is_shaver
    }

    //debito tecnico
    if (!user.name || !user.email || !user.password) {
        return res.status(400).json({ message: "Every field is mandatory." })
    }

    console.log(user)

    try {
        await deleteuser(user.email)
        const id = await insertUser(user)
        res.status(201).json({ user_id: id })
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro', stack: error })
    }

})

app.listen(4000)