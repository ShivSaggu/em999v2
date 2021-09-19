
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
 
var express = require('express') 
var cors = require('cors')
var app = express()
app.use(cors())


app.use(requireHTTPS);
app.use(express.static('./dist/em999v2'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/em999v2/'}),
);


app.listen(process.env.PORT || 8080);