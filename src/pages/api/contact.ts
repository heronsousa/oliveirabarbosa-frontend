import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'oliveiraeassociados.site.contato@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: req.body.email,
        to: 'heronrs1@gmail.com',
        subject: req.body.subject,
        text: req.body.message,
        html: `<div>
                Nome: ${req.body.name} ${req.body.last}<br>
                Telefone: ${req.body.phone}<br>
                Email: ${req.body.email}<br>
                Mensagem: ${req.body.message}<br>
            </div>`
    }

    transporter.sendMail(mailData, (err, info) => {
        if(err) res.send(err);
        else res.send(info);
    })
}
