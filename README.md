# MAKAYA - AN N ANGAJE N

Site web officiel de l'organisation MAKAYA, développé avec Node.js, Express et Bootstrap.

## 🚀 Fonctionnalités

- **Design responsive** avec Bootstrap 5.3.3
- **Contenu dynamique** chargé depuis des fichiers JSON
- **Animations** avec AOS (Animate On Scroll)
- **Section vidéo** avec support YouTube
- **Galerie d'images** avec défilement automatique
- **Newsletter** avec formulaire d'inscription
- **Interface d'administration** pour la gestion de contenu

## 🛠️ Technologies utilisées

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5.3.3
- **Backend**: Node.js, Express.js
- **Animations**: AOS Library
- **Fonts**: Google Fonts (Bebas Neue, Roboto, Montserrat)

## 📁 Structure du projet

```
mon-site/
├── public/           # Fichiers statiques
│   ├── index.html   # Page principale
│   └── contact.html # Page de contact
├── admin/           # Interface d'administration
│   └── index.html
├── *.json          # Fichiers de données (content, about, blog, contact)
├── server.js       # Serveur Express
├── package.json    # Dépendances Node.js
└── Dockerfile      # Configuration Docker
```

## 🚀 Installation et démarrage

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/makaya-site.git
cd makaya-site
```

2. Installer les dépendances :
```bash
npm install
```

3. Démarrer le serveur :
```bash
npm start
```

4. Ouvrir dans le navigateur :
```
http://localhost:3000
```

## 🎨 Personnalisation

### Couleurs principales
- Vert principal: `#023100`
- Or accent: `#e3a808`

### Modification du contenu
Les données du site sont stockées dans les fichiers JSON :
- `content.json` - Contenu principal, activités, événements, membres
- `about.json` - Page à propos
- `blog.json` - Articles de blog
- `contact.json` - Informations de contact

## 🌐 Déploiement

### Firebase Hosting
1. Installer Firebase CLI :
```bash
npm install -g firebase-tools
```

2. Se connecter à Firebase :
```bash
firebase login
```

3. Initialiser le projet :
```bash
firebase init hosting
```

4. Déployer :
```bash
firebase deploy
```

### Docker
```bash
docker build -t makaya-site .
docker run -p 3000:3000 makaya-site
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**MAKAYA** - Organisation communautaire
- Email: contact@makaya.org
- Site: https://makaya-site.web.app

---

**Développé avec ❤️ pour la communauté MAKAYA**
