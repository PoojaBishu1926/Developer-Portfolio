const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// Projects route
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'My Projects' });
});

module.exports = router;
