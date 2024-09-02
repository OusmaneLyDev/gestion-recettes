<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">{{ recipe.title }}</h5>
        </div>
        <div class="card-body">
          <p><strong>Ingrédients :</strong></p>
          <p>{{ recipe.ingredients }}</p>
          <p><strong>Type :</strong> {{ recipe.type }}</p>
        </div>
      </div>
      <router-link to="/list" class="btn btn-secondary mt-3">Retour à la liste</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { useRecipeStore } from '../stores/recipeStore'
  
  const route = useRoute()
  const recipeStore = useRecipeStore()
  
  const recipe = computed(() => recipeStore.recipes[route.params.index])
  </script>
  