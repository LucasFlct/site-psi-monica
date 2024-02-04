const PORT = 5555
const express = require('express')
const app = express()
const path = require('path')
const site = require('./routes/site.js')

//template engine para renderizar as paginas
app.set("view engine", "ejs")

//pasta raiz de onde os arquivos estáticos devem se basear
app.use(express.static(path.join(__dirname, 'public')))

//rotas do site
app.use("/", site)

//receber dados como formulário
app.use(express.urlencoded())

//servidor rodando
app.listen(PORT, ()=>{
    console.log("Server Running on Port: ", PORT)
})