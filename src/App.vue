<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Gestion de Recettes</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add-recipe" class="nav-link" active-class="active">Ajouter Recette</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recipes" class="nav-link" active-class="active">Liste des Recettes</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
