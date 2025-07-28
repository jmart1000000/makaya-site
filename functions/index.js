const functions = require('firebase-functions');
const admin = require('firebase-admin'); // Pour interagir avec Firestore/Realtime Database si besoin
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialiser Firebase Admin SDK (seulement si vous utilisez d'autres services Firebase dans la fonction)
// admin.initializeApp();

const app = express();

// Middleware pour CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route pour le contenu principal
app.get('/content', (req, res) => {
  try {
    const contentPath = path.join(__dirname, '../content.json');
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
    res.json(content);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier content.json:', error);
    res.status(500).json({ error: 'Erreur lors du chargement du contenu' });
  }
});

// Route pour la page à propos
app.get('/about', (req, res) => {
  try {
    const aboutPath = path.join(__dirname, '../about.json');
    const about = JSON.parse(fs.readFileSync(aboutPath, 'utf8'));
    res.json(about);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier about.json:', error);
    res.status(500).json({ error: 'Erreur lors du chargement des informations' });
  }
});

// Route pour le blog
app.get('/blog', (req, res) => {
  try {
    const blogPath = path.join(__dirname, '../blog.json');
    const blog = JSON.parse(fs.readFileSync(blogPath, 'utf8'));
    res.json(blog);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier blog.json:', error);
    res.status(500).json({ error: 'Erreur lors du chargement du blog' });
  }
});

// Route pour les contacts
app.get('/contact', (req, res) => {
  try {
    const contactPath = path.join(__dirname, '../contact.json');
    const contact = JSON.parse(fs.readFileSync(contactPath, 'utf8'));
    res.json(contact);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier contact.json:', error);
    res.status(500).json({ error: 'Erreur lors du chargement des contacts' });
  }
});

// Exporter la fonction Firebase API principale
exports.api = functions.https.onRequest(app);

// Nouvelle fonction getProduits
exports.getProduits = functions.https.onRequest((request, response) => {
  // Optionnel: Définir les en-têtes CORS si votre front-end est sur un domaine différent
  // Ou si vous testez localement et rencontrez des problèmes CORS
  response.set("Access-Control-Allow-Origin", "*"); // Permet à n'importe quel domaine d'accéder (pour la démo)
  response.set("Access-Control-Allow-Methods", "GET, POST"); // Méthodes autorisées

  if (request.method === "OPTIONS") {
    // Répondre aux requêtes OPTIONS (preflight requests) immédiatement
    response.status(204).send("");
    return;
  }

  // Ici, vous mettriez votre logique Node.js pour obtenir les données
  // Par exemple, depuis une base de données Firestore :
  // admin.firestore().collection('produits').get().then(snapshot => { ... });

  const produits = [
    { id: 1, nom: "Ordinateur Portable", prix: 1200 },
    { id: 2, nom: "Smartphone", prix: 800 },
    { id: 3, nom: "Casque Audio", prix: 150 },
  ];

  response.json(produits); // Envoyer les données en format JSON
});
