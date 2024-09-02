<template>
    <div class="home">
      <div class="overlay"></div>
      <div class="content text-center text-white">
        <h1>Bienvenue sur Gestion de Recettes</h1>
        <p>Gérez vos recettes de cuisine de manière simple et intuitive.</p>
        <router-link to="/list" class="btn btn-primary btn-lg">Voir les Recettes</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .home {
    background-image: url('/src/assets/recipe-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .content {
    position: relative;
    z-index: 1;
  }
  </style>
  