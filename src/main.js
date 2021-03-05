import { createApp } from 'vue'

import Todos from './api/todos'
import './assets/css/style.css'

const apiTodos = new Todos()

const app = createApp({
    data() {
        return {
            todos: [],
        }
    },
    created() {
        this.fetchTodos()
    },

    methods: {
        async fetchTodos() {
            this.todos = await apiTodos.index()
        }
    },
})

app.mount('#app')