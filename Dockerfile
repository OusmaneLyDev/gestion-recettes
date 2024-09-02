# Utiliser une image Node.js comme base
FROM node:18-alpine

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port de l'application
EXPOSE 80

# Démarrer l'application
CMD ["npx", "serve", "dist"]
