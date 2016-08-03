var express = require('express'), //Te va a convenir usar express para hacer lo del server, te facilita todo
// Para instalar express mandale un npm install express --save, parado en el directorio de la app
	app = express(),
	http = require('http').Server(app);

//define port
const PORT=3000; 

app.use(express.static(__dirname + '/js')); // Esta es la carpeta publica en donde va a ir los html css y demas

app.get('/', function(req, res){ //aca la ruta
	res.sendFile(__dirname + '/js/views/index.html'); //Aca la pag
});

http.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	}else{
		console.log('API is running on port '+PORT+'!');
	}
});