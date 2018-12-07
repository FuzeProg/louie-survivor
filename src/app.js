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
            "levels": {}
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
        "equipment": {}
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
    },
    "world": {
        "temperature": {
            "now": "",
            "interval": {
                "min": "",
                "max": ""
            }
        },
        "weather": {
            "message": ""
        }
    },
    "expedition": {
        "bpm": {
            "now": ""
        },
        "feed": {
            "now": ""
        },
        "geoposition": {
            "distance": "",
            "time": "",
            "long": "",
            "lat": ""
        },
        "weather": {
            "message": ""
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
