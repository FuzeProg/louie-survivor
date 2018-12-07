const express = require('express'),
    electricity = express.Router();

const glob = global.data.electricity;

/**
 * Production journalière
 * @return tableau de la production totale journalière
 */
electricity.get('/production/day', (req, res) =>{
    res.json({message: glob.production.day});
});

/**
 * Production en temps réel
 * @return production totale en temps réel
 */
electricity.get('/production/now', (req, res) =>{
    res.json({message: glob.production.now});
});

/**
 * Consommation journalière
 * @return tableau de la consommation totale journalière
 */
electricity.get('/consumtion/day', (req, res) =>{
    res.json({message: glob.consumtion.day});
});

/**
 * Consommation en temps réel
 * @return consommation totale en temps réel
 */
electricity.get('/consumtion/now', (req, res) =>{
    res.json({message: glob.consumtion.now});
});

/**
 * Production des piles à combustible journalière
 * @return tableau de la production des piles journalière
 */
electricity.get('/cell/production/day', (req, res) =>{
    res.json({message: glob.cell.production.day})
});

/**
 * Production des piles à combustible en temps réel
 * @return production des piles en temps réel
 */
electricity.get('/cell/production/now', (req, res) =>{
    res.json({message: glob.cell.production.now})
});

/**
 * Niveau d'énergie des piles en temps réel
 * @return niveau d'énergie des piles en temps réel
 */
electricity.get('/cell/levels', (req, res) =>{
    res.json({message: glob.cell.levels});
});

/**
 * Production du vent journalière
 * @return tableau de la production du vent journalière
 */
electricity.get('/wind/production/day', (req, res) =>{
    res.json({message: glob.wind.production.day});
});

/**
 * Production du vent en temps réel
 * @return production du vent en temps réel
 */
electricity.get('/wind/production/now', (req, res) =>{
    res.json({message: glob.wind.production.now});
});

/**
 * Vitesse du vent
 * @return vitesse du vent
 */
electricity.get('/wind/speed', (req, res) =>{
    res.json({message: glob.wind.speed});
});

/**
 * Taux d'ensoleillement
 * @return taux d'ensoleillement entre 0 et 100
 */
electricity.get('/sun/state', (req, res) =>{
    res.json({message: glob.sun.sate});
});

/**
 * Production solaire journalière
 * @return tableau de la production solaire journalière
 */
electricity.get('/sun/production/day', (req, res) =>{
    res.json({message: glob.sun.production.day});
});

/**
 * Production solaire en temps réel
 * @return production solaire en temps réel
 */
electricity.get('/sun/production/now', (req, res) =>{
    res.json({message: glob.sun.production.now});
});

/**
 * Niveau d'énergie des équipements
 * @return niveau d'énergie d'un équipement
 */
electricity.get('/equipment/:id', (req, res) =>{
    let id = req.params.id;
    res.json({message: glob.equipment[id]});
});

/**
 * Verrou pour le /api/electricity
 */
electricity.all('/', (req, res) =>{
    res.status(408).json({message: 'Cul de sac ! :('});
});

module.exports = electricity;