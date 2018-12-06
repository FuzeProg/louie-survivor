const express = require('express'),
    electricity = express.Router(),
    low = require('lowdb'),
    FileSync = require('lowdb/adapters/FileSync'),
    adapter = new FileSync('db.json'),
    db = low(adapter);

/**
 * Production journalière
 * @return tableau de la production totale journalière
 */
electricity.get('/production/day', (req, res) =>{
    res.json(db.get('elec').get('product_day').value());
});

/**
 * Production en temps réel
 * @return production totale en temps réel
 */
electricity.get('/production/now', (req, res) =>{
    res.json(db.get(''));
});

/**
 * Consommation journalière
 * @return tableau de la consommation totale journalière
 */
electricity.get('/consomation/day', (req, res) =>{
    res.json({message: 'Coucou la conso electrique'});
});

/**
 * Consommation en temps réel
 * @return consommation totale en temps réel
 */
electricity.get('/consomation/now', (req, res) =>{
    res.json(db.get('elec').get('conso_now').value());
});

/**
 * Production des piles à combustible journalière
 * @return tableau de la production des piles journalière
 */
electricity.get('/cell/production/day', (req, res) =>{
    res.json({message: 'Coucou la prod des piles'})
});

/**
 * Production des piles à combustible en temps réel
 * @return production des piles en temps réel
 */
electricity.get('/cell/production/now', (req, res) =>{
    res.json({message: 'Coucou la prod des piles'})
});

/**
 * Niveau d'énergie des piles en temps réel
 * @return niveau d'énergie des piles en temps réel
 */
electricity.get('/cell/:id', (req, res) =>{
    let id = req.params.id;
    res.json({message: 'Coucou la pile ' + id});
});

/**
 * Production du vent journalière
 * @return tableau de la production du vent journalière
 */
electricity.get('/wind/production/day', (req, res) =>{
    res.json({message: 'Coucou le vent'});
});

/**
 * Production du vent en temps réel
 * @return production du vent en temps réel
 */
electricity.get('/wind/production/now', (req, res) =>{
    res.json({message: 'Coucou le vent actuelle'});
});

/**
 * Vitesse du vent
 * @return vitesse du vent
 */
electricity.get('/wind/speed', (req, res) =>{
    res.json({message: 'Coucou la vitesse du vent'});
});

/**
 * Taux d'ensoleillement
 * @return taux d'ensoleillement entre 0 et 100
 */
electricity.get('/sun/state', (req, res) =>{
    res.json({message: 'Coucou l\'état du soleil'});
});

/**
 * Production solaire journalière
 * @return tableau de la production solaire journalière
 */
electricity.get('/sun/production/day', (req, res) =>{
    res.json({message: 'Coucou le soleil du jour'});
});

/**
 * Production solaire en temps réel
 * @return production solaire en temps réel
 */
electricity.get('/sun/production/now', (req, res) =>{
    res.json({message: 'Coucou le soleil actuelle'});
});

/**
 * Niveau d'énergie des équipements
 * @return niveau d'énergie d'un équipement
 */
electricity.get('/equipment/:id', (req, res) =>{
    let id = req.params.id;
    res.json({message: 'Coucou equipement ' + id});
});

/**
 * Verrou pour le /api/electricity
 */
electricity.all('/', (req, res) =>{
    res.status(408).json({message: 'Cul de sac ! :('});
});

module.exports = electricity;