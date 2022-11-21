const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/anuncios', async (req, res) => {
    const links = await pool.query('SELECT * FROM links')
    res.render('links/anuncios',{ links });
});


module.exports = router;