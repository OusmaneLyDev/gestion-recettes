import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref([
    {
      id: 1,
      title: 'Chocolate Cake',
      ingredients: 'Flour, Sugar, Cocoa Powder, Baking Powder, Milk, Eggs, Vanilla Extract',
      type: 'Dessert',
      image: 'https://example.com/images/chocolate-cake.jpg',
    },
    {
      id: 2,
      title: 'Caesar Salad',
      ingredients: 'Lettuce, Croutons, Chicken, Caesar Dressing, Parmesan Cheese',
      type: 'Appetizer',
      image: 'https://example.com/images/caesar-salad.jpg',
    },
    {
      id: 3,
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, Ground Beef, Tomato Sauce, Onion, Garlic, Olive Oil, Parmesan Cheese',
      type: 'Main Course',
      image: 'https://example.com/images/spaghetti-bolognese.jpg',
    },
  ])

  const addRecipe = (recipe) => {
    recipe.id = recipes.value.length + 1
    recipes.value.push(recipe)
  }

  const deleteRecipe = (id) => {
    recipes.value = recipes.value.filter((recipe) => recipe.id !== id)
  }

  const updateRecipe = (updatedRecipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id)
    if (index !== -1) {
      recipes.value[index] = updatedRecipe
    }
  }

  return {
    recipes,
    addRecipe,
    deleteRecipe,
    updateRecipe,
  }
})
