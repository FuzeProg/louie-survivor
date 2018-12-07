const express = require('express'),
    food = express.Router();

const glob = global.data.food;

/**
 * Consommation d'eau sur la journée
 * @return tableau de la consommation d'eau sur la journée
 */
food.get('/water/consumtion/day', (req, res) =>{
    res.json({message: glob.water.consumtion.day});
});

/**
 * Production d'eau sur la journée
 * @return tableau de la production d'eau sur la journée
 */
food.get('/water/production/day', (req, res) =>{
    res.json({message: glob.water.production.day});
});

/**
 * Stock de l'eau en temps réel
 * @return quantité d'eau en temps réel
 */
food.get('/water/stock/now', (req, res) =>{
    res.json({message: glob.water.stock.now});
});

/**
 * Consommation de nourriture sur la journée
 * @return tableau de la consommation de nourriture sur la journée
 */
food.get('/food/consumtion/day', (req, res) =>{
    res.json({message: glob.food.consumtion.day});
});

/**
 * Production de nourriture sur la journée
 * @return tableau de la production de nourriture sur la journée
 */
food.get('/food/production/day', (req, res) =>{
    res.json({message: glob.food.production.day});
});

/**
 * Stock de nourriture en temps réel
 * @return quantité de nourriture en temps réel
 */
food.get('/food/stock/now', (req, res) =>{
    res.json({message: glob.food.stock.now});
});

/**
 * Verrou pour le /api/electricity
 */
food.all('/', (req, res) =>{
    res.status(408).json({message: 'Cul de sac ! :('});
});

module.exports = food;