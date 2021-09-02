
export default function (req, res) {
    require('dotenv').config()
    const password = process.env.password
    const personalmail = process.env.personalmail
    const burnermail = process.env.burnermail

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: burnermail,
            pass: password,
        },
        secure: true,
    })

    const mailData = {
        from: burnermail,
        to: personalmail,
        subject: `Message from ${req.body.name}, ${req.body.email}`,
        text: req.body.message,
        html: `<div>
                  Message: ${req.body.message}
              </div>
              <div>
                  Sent from: ${req.body.email}
                  Sent by: ${req.body.name}
              </div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else {
            console.log(info)
        }
    })

    res.status(200)
}
