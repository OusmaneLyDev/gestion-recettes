import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import RecipeList from './components/RecipeList.vue'
import AddRecipe from './components/AddRecipe.vue'
import EditRecipe from './components/EditRecipe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: RecipeList },
  { path: '/add-recipe', component: AddRecipe },
  { path: '/edit-recipe/:id', component: EditRecipe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
