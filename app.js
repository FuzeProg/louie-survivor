const express = require("express"),
    app = express(),
    port = 8080,
    api = require('./api');

app.use('/api', api);

app.listen(port, () => {
    console.log('API started on port : ' + port);
});
