import express from 'express'
import path from 'path'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
import { stat } from 'fs'

dotenv.config()

const app = express()
sgMail.setApiKey(process.env.SGKEY)
app.use(express.json())

app.use(express.static('app'))

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
    // const msg = {
    // to: 'animan667@gmail.com', 
    // from: process.env.FROM, 
    // subject: 'Sending with SendGrid is Fun',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }
    // sgMail
    // .send(msg)
    // .then(() => {
    //     console.log('Email sent')
    // })
    // .catch((error) => {
    //     console.error(error)
    // })
})

app.post('/send', async (req, res) => {
    const { to, subject, html } = req.body
    const msg = {
        to, 
        from: process.env.FROM,
        subject, 
        html
    }

    try{
        await sgMail.send(msg)
        return res.sendStatus(204)
    } catch(err){
        const message = err.response.body.errors.map(e => e.message).join(" ")
        res.status(400).send(message)
    }
})

app.listen(port, () => 
    console.log(`App is running in: https//:localhost/${port}`)
)