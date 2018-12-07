const mqtt = require('mqtt');

const HOST = 'localhost';
const client = mqtt.connect('mqtt://' + HOST, {port: 1883});

client.on('connect', function () {
	console.log("Connected to " + HOST);
	client.subscribe('#');
});

client.on('message', async function (topic, message) {
	decryptMessage = JSON.parse(message);
	message = JSON.parse(message);

	switch (topic) {
		case 'electricity/consumtion/now':
			global.data.elec = message;

	}
});