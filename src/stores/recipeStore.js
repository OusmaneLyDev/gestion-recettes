import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref([])

  const addRecipe = (recipe) => {
    recipe.id = recipes.value.length + 1 // Génère un ID unique
    recipes.value.push(recipe)
  }

  const deleteRecipe = (id) => {
    recipes.value = recipes.value.filter(recipe => recipe.id !== id)
  }

  const editRecipe = (updatedRecipe) => {
    const index = recipes.value.findIndex(recipe => recipe.id === updatedRecipe.id)
    if (index !== -1) {
      recipes.value[index] = updatedRecipe
    }
  }

  return { recipes, addRecipe, deleteRecipe, editRecipe }
})
