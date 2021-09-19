
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
 
var express = require('express'); 
var cors = require('cors');
var app = express();
app.use(cors());


app.use(requireHTTPS);
app.use(express.static('./dist/em999v2'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/em999v2/'}),
);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.listen(process.env.PORT || 8080);