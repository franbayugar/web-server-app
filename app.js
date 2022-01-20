const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.port;

//HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err)=>{});


app.use(express.static('public'));

app.get('/', (req, res) =>  {
    res.render('home',{
        nombre: 'Franco Bayugar',
        titulo: 'Curso de node'
    });
});
app.get('/generic', (req, res) =>  {
    res.render('generic',{
        nombre: 'Franco Bayugar',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) =>  {
    res.render('elements',{
        nombre: 'Franco Bayugar',
        titulo: 'Curso de node'
    });
});


app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
})