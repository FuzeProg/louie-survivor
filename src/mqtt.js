const mqtt = require('mqtt');

const HOST = 'mqtt-generator';
const client = mqtt.connect('mqtt://' + HOST, {port: 1883});

client.on('connect', function () {
	console.log("Connected to " + HOST);
	client.subscribe('#');
});

client.on('message', async function (topic, message) {
	decryptMessage = JSON.parse(message);
	message = JSON.parse(message);

	switch (topic) {
		case 'electricity/wind/speed':
			global.data.electricity.wind.speed = message;
	}
});