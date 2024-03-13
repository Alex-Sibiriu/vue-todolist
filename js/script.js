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
      newTask: {},
      taskError: ''
    }
  },

  methods: {

    deleteTask(task, index) {
      if (task.done) {
        this.toDoList.splice(index, 1)
      }
    },

    addTask() {
      if (this.taskTemp.length >= 4 ) {
        this.newTask = {
          nome: this.taskTemp,
          done: false
        }
        this.toDoList.unshift(this.newTask);
        this.taskTemp = '';
        this.taskError = ''
      } else {
        this.taskError = 'Attenzione! La task deve essere lunga almeno 4 lettere!'
      }
    }
  },

}).mount('#app')