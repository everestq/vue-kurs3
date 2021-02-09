<template>
  <span class="badge" :class="taskStatus.className">{{ taskStatus.status }}</span>
</template>
<script>
import { computed } from 'vue'
export default {
  props: ['type'],

  setup (props) {
    return {
      taskStatus: computed(() => {
        let obj = {}
        switch (props.type) {
          case 'active':
            obj = {
              className: 'primary',
              status: 'Активен'
            }
            break
          case 'done':
            obj = {
              className: 'primary',
              status: 'Завершен'
            }
            break
          case 'cancelled':
            obj = {
              className: 'danger',
              status: 'Отменен'
            }
            break
          case 'pending':
            obj = {
              className: 'warning',
              status: 'Выполняется'
            }
            break
          default: return obj
        }
        return obj
      })
    }
  }
}

</script>
