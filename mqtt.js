const mqtt = require('mqtt');

const HOST = 'localhost';
const client = mqtt.connect('mqtt://' + HOST, {port: 1883});

const low = require('lowdb'),
	FileSync = require('lowdb/adapters/FileSync'),
	adapter = new FileSync('db.json'),
	db = low(adapter);

client.on('connect', function () {
	console.log("Connected to " + HOST);
	client.subscribe('#');
});

client.on('message', async function (topic, message) {
	decryptMessage = JSON.parse(message);
	message = JSON.parse(message);

	switch (topic) {
		case 'electricity/consomation/now':
			global.data.elec = message;

	}
});