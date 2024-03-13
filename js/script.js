const { createApp } = Vue;

createApp({

  data() {
    return {
      toDoList: [
        {
          nome: 'Passeggiata con il cane',
          done: true,
        },
        {
          nome: 'Fare la spesa',
          done: true,
        },
        {
          nome: 'Preparare il pranzo',
          done: false,
        },
        {
          nome: 'Tagliare l\'erba',
          done: false,
        }
      ]
    }
  },

  methods: {
    
  },

}).mount('#app')