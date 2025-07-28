# Utiliser l'image officielle Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port
EXPOSE 3000

# Définir la variable d'environnement pour la production
ENV NODE_ENV=production

# Commande pour démarrer l'application
CMD ["npm", "start"]
