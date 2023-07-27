const dotenv = require ("dotenv")
dotenv.config()
const http = require ("http")

function requestController(){
    //Logica de la función
    console.log("Hola mundo!!")
}

// Configurar nuestro servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT
server.listen(PORT, function (){
    console.log("Aplication corriendo en puerto: " + PORT)
})
