const express = require("express");
const server = express();
const router = require("./router");
const path = require("path");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({extended: false}));
server.use(express.static('public/'));

server.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
server.post("/", async (req, res) => { 
    const data =req.body;
    let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const messageId={
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "khm.lowyer@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
  // send mail with defined transport object
  let info = await transporter.sendMail();

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/m
});
server.get("/about", (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/about.html'));
})

// server.get("/", (req, res) => { 
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// })

server.listen(PORT, error => {
    if (error) {
        console.log("ERROR", error)
    }
    else {
        console.log(`server listing on http://localhost:${PORT}`)
    }
});
