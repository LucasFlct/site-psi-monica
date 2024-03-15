const {google} = require('googleapis')
require('dotenv').config()



//autenticação
async function getAuthSheets() {
const auth = new google.auth.GoogleAuth({
    keyFile: './config/credentials.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = await auth.getClient();

const googleSheets = google.sheets({
    version: "v4",
    auth: client,
});

const spreadsheetId = DOCID_PLANILHA_LEAD;

return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
};
}


module.exports = {  
    //acessa os dados da planilha
    async accessSheet(req, res) {

    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const mensagem = encodeURIComponent(req.body.mensagem)
    
    //data atual no formato 01/01/2001
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;
    
    try{
    const row = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Página1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[nome,email,telefone.replace(/[^0-9]/g, ''),dataAtual]]
          },
    });
    
    console.log(row)
    res.redirect(`https://wa.me//5521992641050?text=${mensagem}`)

    } catch(err){
        console.log(err)
    }

    
    
}


}