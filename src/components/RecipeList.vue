<template>
    <div class="container mt-5">
      <h2>Recipe List</h2>
      <div v-if="recipes.length">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card mb-3"
          style="max-width: 540px;"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                class="img-fluid rounded-start"
                alt="Recipe Image"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ recipe.title }}</h5>
                <p class="card-text">{{ recipe.ingredients }}</p>
                <p class="card-text">
                  <small class="text-muted">{{ recipe.type }}</small>
                </p>
                <router-link :to="`/edit-recipe/${recipe.id}`" class="btn btn-warning btn-sm">Edit</router-link>
                <button @click="deleteRecipe(recipe.id)" class="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>No recipes available. Please add some recipes!</p>
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
  </script>
  