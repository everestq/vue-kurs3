<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="statusChangeToPending">Взять в работу</button>
      <button class="btn primary" @click="statusChangeToDone">Завершить</button>
      <button class="btn danger" @click="statusChangeToCancelled">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: ['taskId'],
  setup (props) {
    const store = useStore()
    const statusChangeToDone = () => {
      store.dispatch('statusChange', {
        id: +props.taskId,
        status: 'done'
      })
    }
    const statusChangeToPending = () => {
      store.dispatch('statusChange', {
        id: +props.taskId,
        status: 'pending'
      })
    }
    const statusChangeToCancelled = () => {
      store.dispatch('statusChange', {
        id: +props.taskId,
        status: 'cancelled'
      })
    }
    return {
      task: computed(() => {
        return store.getters.allTasks.find(e => e.id === +props.taskId)
      }),
      statusChangeToPending,
      statusChangeToDone,
      statusChangeToCancelled
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>

</style>
