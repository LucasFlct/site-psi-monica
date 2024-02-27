const PORT = 3000
const express = require('express')
const app = express()
const path = require('path')
const site = require('./routes/site.js')

//template engine para renderizar as paginas
app.set("view engine", "ejs")

//pasta raiz de onde os arquivos estáticos devem se basear
app.use(express.static(path.join(__dirname, 'public')))

//receber dados do front-end
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//redirecionamento para www e https
app.use(function(req, res, next) {
    if (req.secure){
        return next();
    }
    res.redirect("https://" + req.headers.host + req.url);
});

//rotas do site
app.use("/", site)

//servidor rodando
app.listen(PORT, ()=>{
    
    console.log("Server Running on Port:", PORT)
})