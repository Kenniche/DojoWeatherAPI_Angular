const path = require('path');
module.exports = (app) => {
    // Catchall for malformed requests
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}
