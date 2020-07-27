let app = require('express')();


app.set('view engine','ejs')

app.get('/', (request,response) =>{

    response.render('page/index', {test: 'salut'});
})

app.listen(8080)