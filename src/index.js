//Importando express, para hacerlo de esta manera toca crear en el package.json un "type":"module";
import express from "express";

//Creando objeto app para llamar express
const app = express();

//URL
//Peticion http: Metodo GET para que cuando soliciten url se muestre algo
app.get('/', (req, res) => res.send("HSEQ CONTROL TOTAL"))

//Llamando el metodo listen y colocando el puerto 3000
app.listen(3000);

console.log('Server is listening on port', 3000);
