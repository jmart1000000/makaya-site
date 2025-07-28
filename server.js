const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Middleware pour parser le JSON
app.use(express.json());

// Route pour servir le contenu JSON
app.get('/api/content', (req, res) => {
    try {
        const contentPath = path.join(__dirname, 'content.json');
        console.log('Tentative de lecture du fichier:', contentPath); // Debug
        const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
        console.log('Contenu chargé avec succès'); // Debug
        res.json(content);
    } catch (error) {
        console.error('Erreur lors du chargement du contenu:', error); // Debug
        res.status(500).json({ error: 'Erreur lors du chargement du contenu', details: error.message });
    }
});

// Route pour servir les articles du blog
app.get('/api/blog', (req, res) => {
    try {
        const blogPath = path.join(__dirname, 'blog.json');
        const blog = JSON.parse(fs.readFileSync(blogPath, 'utf8'));
        res.json(blog);
    } catch (error) {
        console.error('Erreur lors du chargement du blog:', error);
        res.status(500).json({ error: 'Erreur lors du chargement du blog', details: error.message });
    }
});

// Route pour servir les informations "à propos"
app.get('/api/about', (req, res) => {
    try {
        const aboutPath = path.join(__dirname, 'about.json');
        const about = JSON.parse(fs.readFileSync(aboutPath, 'utf8'));
        res.json(about);
    } catch (error) {
        console.error('Erreur lors du chargement des informations:', error);
        res.status(500).json({ error: 'Erreur lors du chargement des informations', details: error.message });
    }
});

// Route pour servir les informations de contact
app.get('/api/contact', (req, res) => {
    try {
        const contactPath = path.join(__dirname, 'contact.json');
        const contact = JSON.parse(fs.readFileSync(contactPath, 'utf8'));
        res.json(contact);
    } catch (error) {
        console.error('Erreur lors du chargement des contacts:', error);
        res.status(500).json({ error: 'Erreur lors du chargement des contacts', details: error.message });
    }
});

// Route par défaut - servir la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour la page de contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
