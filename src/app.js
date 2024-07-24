import express from "express"
import productRouter from "./Routes/products.router.js"; 
import cartRouter from "./Routes/carts.router.js";

const app = express()
const PUERTO = 8080

//Para enviar informacion en formato JSON
app.use(express.json())

//Rutas
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);



//Listen
app.listen(PUERTO, (req, res)=>{
    console.log("Escuchando en el puerto 8080")
})


