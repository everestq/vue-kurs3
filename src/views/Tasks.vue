<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <div
      class="card"
      v-for="task in tasks"
      :key="task.id"
    >
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <router-link
        :to="'/task/' + task.id"
        class="btn primary"
      >Посмотреть</router-link>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    return {
      tasks: store.getters.allTasks,
      activeTasks: store.getters.numberOfActiveTasks
    }
  },
  components: { AppStatus }
}
</script>
