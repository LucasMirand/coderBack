const express = require('express')
let app = express()
const PORT = 8080;
let moment = require('moment')

let totalVisitas = 0;


app.get('/',(req,res,next) => {
    totalVisitas ++;
    res.send('<p>Primer server con Express en: <b>BackEnd<b/></p>')

})
app.get('/visitas',(req,res,next) => {
    res.send(`la cantidad de visitas es ${totalVisitas}`)
})

app.get('/fyh', (req,res,next) => {
    res.json({fyh:moment().format('DD/MM/YYYY HH:mm:ss')})
})

app.listen(PORT, ()=> {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})


