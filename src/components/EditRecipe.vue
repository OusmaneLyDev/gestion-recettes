<template>
    <div class="container mt-5">
      <h2>Edit Recipe</h2>
      <form @submit.prevent="updateRecipe">
        <div class="mb-3">
          <label for="title" class="form-label">Recipe Title</label>
          <input
            type="text"
            id="title"
            v-model="recipe.title"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">Ingredients</label>
          <textarea
            id="ingredients"
            v-model="recipe.ingredients"
            class="form-control"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Type</label>
          <select v-model="recipe.type" id="type" class="form-control" required>
            <option value="Starter">Starter</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Update Recipe</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useRecipeStore } from '../stores/recipeStore'
  
  const route = useRoute()
  const router = useRouter()
  const recipeStore = useRecipeStore()
  
  const recipe = ref({
    id: null,
    title: '',
    ingredients: '',
    type: '',
  })
  
  onMounted(() => {
    const recipeId = parseInt(route.params.id)
    const foundRecipe = recipeStore.getRecipeById(recipeId)
    if (foundRecipe) {
      recipe.value = { ...foundRecipe }
    } else {
      router.push('/recipes') // Redirect to recipe list if recipe not found
    }
  })
  
  const updateRecipe = () => {
    recipeStore.updateRecipe({ ...recipe.value })
    router.push('/recipes')
  }
  </script>
  