global.data = {
    "electricity": {
        "production": {
            "day": "",
            "now": ""
        },
        "consumtion": {
            "day": "",
            "now": ""
        },
        "cell": {
            "production": {
                "day": "",
                "now": ""
            },
            "levels": [{
                "1": "",
                "2": "",
                "3": ""
            }]
        },
        "wind": {
            "production": {
                "day": "",
                "now": ""
            },
            "speed": ""
        },
        "sun": {
            "sate": "",
            "production": {
                "day": "",
                "now": ""
            }
        },
        "equipment": [{
            "1": "",
            "2": "",
            "3": ""
        }]
    },
    "food": {
        "water": {
            "consumtion": {
                "day": ""
            },
            "production": {
                "day": ""
            },
            "stock": {
                "now": ""
            }
        },
        "food": {
            "consumtion": {
                "day": ""
            },
            "production": {
                "day": ""
            },
            "stock": {
                "now": ""
            }
        }
    }
};

const express = require("express"),
    app = express(),
    port = 8080,
    api = require('./api');
mqtt = require('./mqtt');

app.use('/api', api);

app.listen(port, () => {
    console.log('API started on port : ' + port);
});
