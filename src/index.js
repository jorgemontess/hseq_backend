//Importando express, para hacerlo de esta manera toca crear en el package.json un "type":"module";
import express from "express";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'


const app = express()


const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(join(__dirname, 'views'))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')


//ROUTES
app.get('/', (req, res) => res.render('index'))

app.get('/servicios', (req, res) => res.render('servicios'))

app.get('/contactenos', (req, res) => res.render('contactenos'))

app.listen(3000);

console.log('Server is listening on port', 3000);
