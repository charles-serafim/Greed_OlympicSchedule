<template>
  <div class="container">
    <CategorySelection class="collumn" @categories-updated="handleCategoriesUpdated" />
    <SelectedCategories class="collumn" :selectedCategories="selectedCategories" />
  </div>
</template>

<script>
import CategorySelection from './components/CategorySelection.vue'
import SelectedCategories from './components/SelectedCategories.vue'

export default {
  name: 'App',
  components: {
    CategorySelection,
    SelectedCategories
  },
  data() {
    return {
      selectedCategories: []
    };
  },
  methods: {
    handleCategoriesUpdated(selectedCategories) {
      this.selectedCategories = selectedCategories;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.collumn {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
