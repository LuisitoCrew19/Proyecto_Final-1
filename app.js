const express = require('express');
const app= express();
const mongoose = require('mongoose');

require('dotenv/config');


//import 

const bodegasWeb = require('./WebForms/Bodegas');
const clientesWeb = require('./WebForms/Clientes');
const consecutivosWeb = require('./WebForms/Consecutivos');
const eventosWeb = require('./WebForms/Eventos');
const procesosWeb = require('./WebForms/Procesos');
const productosWeb = require('./WebForms/Productos');
const proveedoresWeb = require('./WebForms/Proveedores');
const tiposmateriaprimasWeb = require('./WebForms/Tipos de Materia Prima');
const usuariosWeb = require('./WebForms/Usuarios');

const postsRoute = require('./routes/posts');
const rolesRoute = require('./routes/roles');
const eventosRoute = require('./routes/eventos');
const parametrosRoute = require('./routes/parametros');
const consecutivosRoute = require('./routes/consecutivos');
const bodegasRoute = require('./routes/bodegas');
const camionesRoute = require('./routes/camiones');
const tpmRoute = require('./routes/tipos_materia_prima');
const mpRoute = require('./routes/materia_prima');
const proveedoresRoute = require('./routes/proveedores');


app.use('/posts', postsRoute);
app.use('/roles', rolesRoute);
app.use('/eventos', eventosRoute)
app.use('/parametros', parametrosRoute);
app.use('/consecutivos', consecutivosRoute);
app.use('/bodegas', bodegasRoute);
app.use('/camiones', camionesRoute);
app.use('/tipos_materia_prima', tpmRoute);
app.use('/materia_prima', mpRoute);
app.use('proveedores', proveedoresRoute);
//routes

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
 });

 
 


 



//conectar a bd

mongoose.connect(process.env.DB_CONN , { useNewUrlParser: true }, () =>
          console.log('connected to DB')
  );

//listen()
app.listen(3000);