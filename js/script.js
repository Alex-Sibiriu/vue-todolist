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
      ],
      taskTemp: '',
      newTask: {}
    }
  },

  methods: {

    deleteTask(index) {
      this.toDoList.splice(index, 1)
    },

    addTask() {
      this.newTask = {
        nome: this.taskTemp,
        done: false
      }
      this.toDoList.unshift(this.newTask);
      this.taskTemp = ''
    }
  },

}).mount('#app')