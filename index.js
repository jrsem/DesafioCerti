import express from 'express';
var writtenNumber = require('written-number');//extenso biblioteca
const app = express();

app.get('/', (request, response) =>
    response.send('WELCOME TO CERTI')
)

app.get('/:id', (req, res) => {
    var valor=req.params.id
    var word='';
    if(valor>=-999999 && valor < 0){
        word="menos"+ " "
        word+=writtenNumber(valor*(-1), {lang: 'pt'});
        res.send({ "extenso":word})}

    else if (valor>=0 && valor<=999999){
        word+=writtenNumber(valor, {lang: 'pt'})
        res.send({ "extenso":word})}

    else{
        res.send("o numero dever entre -999999 e 999999")
    }
});

const server = app.listen(3000, () => {
    const {
        address,
        port
    } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});