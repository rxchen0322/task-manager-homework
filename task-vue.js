const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      filter: "all",
      tasks: []
    };
  },

  computed: {
    filteredTasks() {
      if (this.filter === "active") {
        return this.tasks.filter((task) => !task.completed);
      }

      if (this.filter === "completed") {
        return this.tasks.filter((task) => task.completed);
      }

      return this.tasks;
    },

    activeCount() {
      return this.tasks.filter((task) => !task.completed).length;
    },

    completedCount() {
      return this.tasks.filter((task) => task.completed).length;
    }
  },

  methods: {
    addTask() {
      const taskName = this.newTask.trim();

      if (!taskName) {
        return;
      }

      this.tasks.push({
        id: Date.now(),
        name: taskName,
        completed: false
      });

      this.newTask = "";
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
  }
}).mount("#app");