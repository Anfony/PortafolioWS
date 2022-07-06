var express = require('express');
var app = express();
var path = require('path');

app.set('port', 80)

app.use(express.static(path.join(__dirname,'src')));

app.get('/', function(req, res){
	res.send("Holaprros");
});

app.listen(app.get('port'), ()=>{
	console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`);
});