const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

 // hacer referencia o mapeo a una carpeta virtual que se llama assets.
 app.use('/assets', express.static(__dirname + '/public'));

 app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send(`
    <html>
    <head>
    <link href=/assets/style.css type=text/css rel=stylesheet />
    </head>
    <body>
        <h1>
            Hello world!
        </h1>
    </body>
</html>`);
});

//ruta que recibe un parametro.
app.get('/person/:id', (req, res)=> {
    res.render('person', {ID: req.params.id, Mensaje: req.query.message, Times: req.query.times});
});

app.listen(port);