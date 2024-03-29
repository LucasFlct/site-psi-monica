const express = require("express")
const nodemailer = require('nodemailer')
require('dotenv').config()
const CaptacaoController = require('../controllers/CaptacaoController')
const router = express.Router()

router.get("/", (req,res)=>{
    res.render('home')
})

router.get("/sobre", (req,res)=>{
    res.render('sobre')
})

router.post("/captacao", CaptacaoController.accessSheet)

router.get("/tratamentos", (req,res)=>{
    res.render('tratamentos')
})
 
var formContato = { info:null, err:null }

router.get("/contato", (req,res)=>{
    res.render('contato', { formContato })
    if(formContato.info || formContato.err){
        formContato = { info:null, err:null }
    }
})

router.post("/contato", (req,res)=>{

    var name = req.body.name
    var email = req.body.email
    var tel = req.body.tel
    var message = req.body.message
    var emailMessage = `Nome: ${name}\nEmail: ${email}\nTelefone: ${tel}\nMenssagem: ${message}`;
    
    const transporter = nodemailer.createTransport({ // Configura os parâmetros de conexão com servidor.
        host: process.env.HOST_EMAIL,
        port: process.env.HOST_PORT,
        secure: true,
        auth: {
          user: process.env.HOST_USER,
          pass: process.env.HOST_PASS
        }
      })
    
    const mailOptions = { // Define informações pertinentes ao E-mail que será enviado
        from: 'contato@psimonicacosta.com.br',
        to: 'contato@psimonicacosta.com.br',
        replyTo: email,
        subject: 'Contato do Site',
        text: emailMessage
      }
    
      setTimeout(()=>{

          transporter.sendMail(mailOptions, (err, info) => { // Função que, efetivamente, envia o email.
            if (err) {
                console.log(err)
                formContato = { info:null, err: "Erro ao enviar mensagem" }
            } else {
                console.log(info)
                formContato = { info:"Mensagem enviada com sucesso", err: null }
            }
            res.redirect('/contato')
        })
    },3000)

})

router.get("/privacidade", (req,res)=>{
    res.render('privacidade')
})

router.get("/*", (req,res)=>{
    res.send('<h1>Página não encontrada</h1>')
})

module.exports = router
