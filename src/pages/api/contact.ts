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

    console.log(req.body);

    const mailData = {
        from: req.body.email,
        to: 'oliveirabarbosaadvogados@gmail.com',
        subject: req.body.subject,
        text: req.body.message,
        html: `<div>
                Nome: ${req.body.name}<br>
                Telefone: ${req.body.phone}<br>
                Email: ${req.body.email}<br>
                Mensagem: ${req.body.message}<br>
            </div>`
    }

    transporter.sendMail(mailData, (err, info) => {
        if(err) res.json(err);
        else res.json(info);
    })
}
