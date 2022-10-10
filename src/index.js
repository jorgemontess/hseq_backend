//Importando express, para hacerlo de esta manera toca crear en el package.json un "type":"module";
import express from "express";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

//Importando rutas desde routes
import indexRoutes from './routes/index.js'


const app = express()


const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(join(__dirname, 'views'))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')


//ROUTES
//llamando y utilizando las rutas importadas
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')));


app.listen(process.env.PORT || 3000);

console.log('Server is listening on port', process.env.PORT || 3000);
