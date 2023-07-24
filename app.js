const express = require('express');
const path = require('path');
const checklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
require('./config/database')


const app = express();
app.use(express.json()); //middleware do Express para processar  JSON quando for passado um JSON no Body da requisição

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/checklists',checklistRouter)
app.use('/',rootRouter)


app.listen(3000,()=> {
    console.log('Servidor ativo.')
   // res.send()
})