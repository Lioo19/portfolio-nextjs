import { username, password } from "./auth.js"

export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: username,
            pass: password,
        },
        secure: true,
    })

    console.log(req.body)
}
