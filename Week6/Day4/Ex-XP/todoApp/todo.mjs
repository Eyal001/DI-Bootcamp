class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskDescription) {
    const task = {
      description: taskDescription,
      completed: false,
    };
    this.tasks.push(task);
    console.log(`Task added: ${taskDescription}`);
  }
  markComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Task at index ${index} marked as complete.`);
    } else {
      console.log("Invalid task index.");
    }
  }
  listTask() {
    if (this.tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      console.log("Tasks: ");
      this.tasks.forEach((task, index) => {
        console.log(
          `${index + 1}. ${task.description} - ${
            task.completed ? "Completed" : "Pending"
          }`
        );
      });
    }
  }
}

export default TodoList;
