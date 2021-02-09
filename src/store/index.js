import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    allTasks (state) {
      return state.tasks
    },
    numberOfActiveTasks (state) {
      let count = 0
      if (state.tasks.length) {
        state.tasks.forEach(task => {
          if (task.status === 'active' || task.status === 'pending') {
            count++
          }
        })
      }
      return count
    }
  },
  mutations: {
    addedTask (state, payload) {
      state.tasks.push(payload)
    },
    statusChange (state, payload) {
      const id = state.tasks.findIndex(e => e.id === payload.id)
      state.tasks[id].status = payload.status
    },
    loadTasks (state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    addedTask ({ commit, state }, payload) {
      if (JSON.parse(localStorage.getItem('tasks'))) {
        const tasks = [...state.tasks]
        tasks.push(payload)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        commit('addedTask', payload)
      } else {
        const arr = []
        arr.push(payload)
        localStorage.setItem('tasks', JSON.stringify(arr))
        commit('addedTask', payload)
      }
    },
    statusChange ({ commit, state }, payload) {
      const tasks = [...state.tasks]
      const id = state.tasks.findIndex(e => e.id === payload.id)
      tasks[id].status = payload.status
      localStorage.setItem('tasks', JSON.stringify(tasks))
      commit('statusChange', payload)
    },
    loadTasks ({ commit }) {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      if (tasks) {
        commit('loadTasks', tasks)
      }
    }
  }
})
