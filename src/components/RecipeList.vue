<template>
  <div class="container mt-5">
    <h2>Liste des Recettes</h2>
    <div v-if="recipes.length === 0">
      <p>Aucune recette disponible.</p>
    </div>
    <div v-else>
      <ul class="list-group">
        <li v-for="recipe in recipes" :key="recipe.id" class="list-group-item">
          <h5>{{ recipe.title }}</h5>
          <p>Type: {{ recipe.type }}</p>
          <button @click="deleteRecipe(recipe.id)" class="btn btn-danger btn-sm">Supprimer</button>
          <button @click="editRecipe(recipe)" class="btn btn-warning btn-sm">Modifier</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'

const recipeStore = useRecipeStore()
const recipes = computed(() => recipeStore.recipes)

const deleteRecipe = (id) => {
  recipeStore.deleteRecipe(id)
}

const editRecipe = (recipe) => {
  // Ajoutez ici la logique pour modifier une recette
}
</script>
