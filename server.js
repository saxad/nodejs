let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');

const { request, response } = require('express');
let app = express()


app.set('view engine','ejs')
app.set('trust proxy', 1) // trust first proxy

/**
 * middleware
 */

app.use('/assets',express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))
/**
 * Routes
 */

app.get('/', (request,response) =>{
    //console.log(request.session)
//    console.log(request.session)
    response.render('pages/index');
})

app.post('/', (request, response) =>{
    
    if(request.body.message === '' || request.body.message === undefined){
        
       // request.session.error = " Vous n'avez pas entrez de message :(";
      //  response.render('pages/index', {error: " Vous n'avez pas entrez de message :\"("})
      request.flash('error', "vous n'avez pas posté de message ");
      response.redirect('/')

    }
})


app.listen(8080)