var express = require("express")
var router = express.Router()

router.get("/", (req,res)=>{
    res.render('home')
})

router.get("/sobre", (req,res)=>{
    res.render('sobre')
})

router.get("/tratamentos", (req,res)=>{
    res.render('tratamentos')
})

router.get("/contato", (req,res)=>{
    res.render('contato')
})

router.get("/*", (req,res)=>{
    res.send('<h1>Página não encontrada</h1>')
})

module.exports = router
