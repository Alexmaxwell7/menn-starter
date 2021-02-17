<template>
  <div class="bg-white">
    <div class="text-center p-20">
      <h1 class="text-3xl font-bold">Todo List</h1>

      <div v-if="!isEditing" class="m-10">
        <input v-model="todo" class="border border-black h-30" type="text" />
        <input
          type="submit"
          value="Add"
          class="px-4 text-base rounded-xl"
          @click="storeTodo"
        />
      </div>
      <div v-else>
        <input v-model="todo" type="text" />
        <input type="submit" value="Update" @click="updateTodo" />
      </div>

      <ol>
        <li
          v-for="(todo, index) in todos"
          :key="todo"
          class="bg-gray-500 w-full"
        >
          {{ todo }}
          <button
            class="text-base border border-black"
            @click="editTodo(index, todo)"
          >
            Edit
          </button>
          <button
            class="text-base border border-black"
            @click="removeTodo(index)"
          >
            Delete
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      todo: '',
      todos: [],
      selectedTodo: null,
    }
  },

  methods: {
    storeTodo() {
      this.todos.push(this.todo)
      this.todo = ''
    },

    removeTodo(index) {
      this.todos.splice(index, 1)
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo)
      this.todo = ''
      this.isEditing = false
    },

    editTodo(index, todo) {
      this.isEditing = true
      this.todo = todo
      this.selectedIndex = index
    },
  },
}
</script>
