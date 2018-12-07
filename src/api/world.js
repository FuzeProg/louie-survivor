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
 * Température minimale sur la journée
 * @return température minimale sur la journée
 */
world.get('/temperature/interval/minimale', (req, res) =>{
    res.json({message: glob.temperature.interval.min});
});

/**
 * Température maximale sur la journée
 * @return température maximale sur la journée
 */
world.get('/temperature/interval/maximale', (req, res) =>{
    res.json({message: glob.temperature.interval.max});
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