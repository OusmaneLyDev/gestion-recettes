<template>
  <div class="container mt-5">
    <h2>Ajouter une Recette</h2>
    <form @submit.prevent="addRecipe">
      <div class="mb-3">
        <label for="title" class="form-label">Titre de la recette</label>
        <input v-model="title" type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingrédients</label>
        <textarea v-model="ingredients" class="form-control" id="ingredients"></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type de recette</label>
        <select v-model="type" class="form-select" id="type">
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'

const title = ref('')
const ingredients = ref('')
const type = ref('entrée')
const recipeStore = useRecipeStore()

const addRecipe = () => {
  if (title.value && ingredients.value && type.value) {
    recipeStore.addRecipe({ title: title.value, ingredients: ingredients.value, type: type.value })
    title.value = ''
    ingredients.value = ''
    type.value = 'entrée'
  }
}
</script>
