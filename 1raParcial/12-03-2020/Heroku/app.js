var express = require('express');
var app = express();

var port = process.env.port;

app.get('/', function(req,res){ /// "/" hacer una ruta a la raiz 
    res.send("Hola")
})
app.listen(process.env.PORT, '0.0.0.0')