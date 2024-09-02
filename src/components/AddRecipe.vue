<template>
    <div class="container mt-5">
      <h2>Add a Recipe</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Recipe Title</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter recipe title"
          />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">Ingredients</label>
          <textarea
            v-model="ingredients"
            class="form-control"
            id="ingredients"
            rows="3"
            placeholder="Enter ingredients"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Recipe Type</label>
          <input
            v-model="type"
            type="text"
            class="form-control"
            id="type"
            placeholder="Enter recipe type"
          />
        </div>
        <button type="submit" class="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRecipeStore } from '../stores/recipeStore'
  
  const title = ref('')
  const ingredients = ref('')
  const type = ref('')
  
  const recipeStore = useRecipeStore()
  
  const handleSubmit = () => {
    if (title.value && ingredients.value && type.value) {
      recipeStore.addRecipe({
        title: title.value,
        ingredients: ingredients.value,
        type: type.value,
      })
      // Reset form
      title.value = ''
      ingredients.value = ''
      type.value = ''
    }
  }
  </script>
  