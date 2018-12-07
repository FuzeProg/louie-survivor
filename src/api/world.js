const express = require('express'),
    world = express.Router();

const glob = global.data.world;

/**
 * Température actuelle
 * @return température en temps réel
 */
world.get('/temperature/now', (req, res) =>{
    res.json({message: glob.temperature.now});
});

/**
 * Interval de température sur la journée
 * @return interval de température sur le journée
 */
world.get('/temperature/interval', (req, res) =>{
    res.json({message: glob.temperature.interval});
});

/**
 * Alerte météo
 * @return alerte météo en direct
 */
world.get('/weather', (req, res) =>{
    res.json({message: glob.weather.message});
});

/**
 * Verrou pour le /api/world
 */
world.all('/', (req, res) =>{
    res.status(408).json({message: 'Cul de sac ! :('});
});

module.exports = world;