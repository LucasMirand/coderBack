let http = require('http');
let moment = require('moment')

const PORT = 8080;

let app = http.createServer((req,res) =>{
    let hour = moment().format('HH')
    
    let msj = ""
    if (hour >= 6 && hour <= 12) {
        msj = "Buenos days"
    }
    else if (hour > 12 && hour <= 19) {
        msj = "Buenas tardes"
    } else {
        msj = "Buenas noches"
    }
    

    res.end(`Hola desde el server a las: ${hour}. Por lo tanto ${msj}`)
})


app.listen(PORT, ()=> {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})