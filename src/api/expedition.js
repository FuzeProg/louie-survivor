const express = require('express'),
    expedition = express.Router();

const glob = global.data.expedition;

/**
 * Rythme cardiaque de l'explorateur en temps réel
 * @return rythme cardiaque en temps réel
 */
expedition.get('/bpm', (req, res) => {
    res.json({message: glob.bpm.now});
});

/**
 * Etat nutritif de l'explorateur en temps réel
 * @return etat nutritif en temps réel
 */
expedition.get('/feed', (req, res) => {
    res.json({message: glob.feed.now});
});

/**
 * Distance entre l'explorateur et sa base
 * @return distance entre sa base et l'explorateur
 */
expedition.get('/geoposition/distance', (req, res) => {
    res.json({message: glob.geoposition.distance});
});

/**
 * Durée pendant laquelle l'explorateur s'est absenté de sa base
 * @return durée d'absentéïsme de la base
 */
expedition.get('/geoposition/time', (req, res) => {
    res.json({message: glob.geoposition.time});
});

/**
 * Longitude GPS
 * @return longitude
 */
expedition.get('/geoposition/long', (req, res) => {
    res.json({message: glob.geoposition.long});
});

/**
 * Latitude GPS
 * @return latitude
 */
expedition.get('/geoposition/lat', (req, res) => {
    res.json({message: glob.geoposition.lat});
});

/**
 * Météo en temps réel
 * @return conditions météorologiques en temps réel
 */
expedition.get('/weather', (req, res) => {
    res.json({message: glob.weather});
});

/**
 * Verrou pour le /api/expedition
 */
expedition.all('/', (req, res) =>{
    res.status(408).json({message: 'Cul de sac ! :('});
});

module.exports = expedition;