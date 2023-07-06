const express = require('express');
const checklistRouter = require('./src/routes/checklist')
const app = express();

app.use(express.json()); //middleware do Express para processar  JSON quando for passado um JSON no Body da requisição
app.use('/checklists',checklistRouter)


app.listen(3000,()=> {
    console.log('Servidor ativo.')
   // res.send()
})