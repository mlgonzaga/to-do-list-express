const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectando ao MongoDB'))
    .catch((err) => console.error(err));







    //Checklist.create({ name: 'criar um novo código' }).then(checklist => {console.log(checklist);}).catch(err => {console.error(err);});

