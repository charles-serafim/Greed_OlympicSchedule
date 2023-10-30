<template>
  <div>
    <h2>Categorias Selecionadas</h2>
    <div class="scroll-container">
      <ul>
        <li v-for="category in selectedCategories" :key="category.id">
          {{ category.name }}
          <ul>
            <li v-for="session in category.sessions" :key="session.name">
              {{ session.name }}
              <ul>
                <li>Data: {{ session.startTime.toLocaleDateString() }}</li>
                <li>
                  Hora de Início: {{ session.startTime.toLocaleTimeString() }}
                </li>
                <li>Hora de Fim: {{ session.endTime.toLocaleTimeString() }}</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SelectedCategories",
  props: {
    selectedCategories: Array,
  },
};
</script>
  
<style>
.scroll-container {
  max-height: 400px; /* Defina a altura máxima desejada */
  overflow-y: auto; /* Adicione uma barra de rolagem vertical quando necessário */
}
</style>