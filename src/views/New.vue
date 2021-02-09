<template>
  <form class="card" @submit.prevent="addedTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isValid" type="submit">Создать</button>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const title = ref(null)
    const date = ref(null)
    const description = ref(null)
    const store = useStore()
    const router = useRouter()
    const isValid = computed(() => {
      if (title.value && date.value && description.value) {
        return false
      }
      return true
    })
    const addedTask = () => {
      const newTask = {
        title: title.value,
        date: date.value,
        description: description.value,
        id: Date.now(),
        status: Date.parse(date.value) > Date.now() ? 'active' : 'cancelled'
      }
      store.dispatch('addedTask', newTask)
      router.push('/')
    }

    return {
      isValid,
      title,
      date,
      description,
      addedTask
    }
  }
}
</script>
