# Gestion de Recettes

## Description

Cette application de gestion de recettes a été développée en utilisant Vue.js 3 avec la Composition API. Elle permet aux utilisateurs de gérer leurs recettes de cuisine de manière simple et intuitive. Les fonctionnalités incluent l'ajout, la modification, la suppression, et l'affichage de recettes. L'application utilise Pinia pour la gestion des états globaux et Bootstrap pour le style de l'interface utilisateur.

## Fonctionnalités

- **Ajout de recettes :** Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant un titre, les ingrédients, et le type de recette (entrée, plat, dessert).
- **Modification de recettes :** Les utilisateurs peuvent modifier les recettes existantes.
- **Suppression de recettes :** Les utilisateurs peuvent supprimer des recettes de la liste.
- **Affichage de la liste des recettes :** Une page affiche toutes les recettes disponibles, avec la possibilité de voir les détails de chaque recette.

## Technologies Utilisées

- **Vue.js 3** avec Composition API
- **Pinia** pour la gestion d'état
- **Bootstrap 5** pour le style
- **Vue Router** pour la navigation
- **Docker** pour la conteneurisation
- **Git** pour la gestion de version
- **Vercel** pour le déploiement

## Prérequis

- Node.js (version 14 ou supérieure)
- NPM (version 6 ou supérieure)

## Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/OusmaneLyDev/gestion-recettes.git

   cd gestion-recettes

    Installer les dépendances :

    bash

    npm install

Lancer l'application en développement :

bash

    npm run dev

    Accéder à l'application : Ouvrez votre navigateur et allez à http://localhost:5000.

Utilisation

    Ajouter une recette : Cliquez sur "Ajouter une Recette" dans la barre de navigation et remplissez le formulaire.
    Modifier une recette : Depuis la liste des recettes, cliquez sur le titre de la recette que vous souhaitez modifier, puis cliquez sur "Modifier".
    Supprimer une recette : Depuis la liste des recettes, cliquez sur le bouton "Supprimer" à côté de la recette souhaitée.
    Voir les détails d'une recette : Depuis la liste des recettes, cliquez sur le titre de la recette pour voir ses détails.

Gestion de Version avec Git

Les changements apportés au projet doivent être versionnés avec Git. Voici quelques bonnes pratiques :

    Commits fréquents : Faites des commits après chaque changement important.
    Messages de commit clairs : Les messages de commit doivent décrire précisément les changements effectués.

    bash

    git add .
    git commit -m "Ajout de la fonctionnalité d'ajout de recettes"
    git push origin main

Déploiement
1. Déploiement sur Vercel

    Créer un compte Vercel et lier le dépôt GitHub où se trouve votre projet.

    Déployer le projet :
        Sur Vercel, sélectionnez votre dépôt et configurez le projet pour qu'il utilise les commandes de build de Vue.js.
        Vercel détectera automatiquement les commandes de build et de développement.
        Cliquez sur "Deploy".

    URL de production :
        Une fois le déploiement terminé, Vercel fournira une URL pour accéder à votre application en ligne.

2. Conteneurisation avec Docker

    Créer l'image Docker :

    bash

docker build -t gestion-recettes .

Exécuter le conteneur Docker localement :

bash

    docker run -p 8080:80 gestion-recettes

    Accéder à l'application : Ouvrez votre navigateur et allez à http://localhost:8080.

3. Publication de l'image Docker sur Docker Hub

    Se connecter à Docker Hub :

    bash

docker login

Taguer l'image Docker :

bash

docker tag gestion-recettes votre-utilisateur/gestion-recettes:latest

Pousser l'image sur Docker Hub :

bash

    docker push votre-utilisateur/gestion-recettes:latest

Contribution

Les contributions sont les bienvenues. Pour contribuer :

    Forker le projet
    Créer une branche pour votre fonctionnalité

    bash

git checkout -b feature-nouvelle-fonctionnalite

Committer vos changements

bash

git commit -m "Ajout d'une nouvelle fonctionnalité"

Pousser la branche vers GitHub

bash

    git push origin feature-nouvelle-fonctionnalite

    Ouvrir une Pull Request

Auteurs

[Ethman Ly](https://github.com/OusmaneLyDev)