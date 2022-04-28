<template>
  <Dialog
    :closable="false"
    :draggable="false"
    :visible="show"
    :style="{ width: '350px' }"
    :modal="true"
  >
    <div class="item-center">
      <div
        v-if="type"
        class="popup-type-icon"
        :class="{
          'text-warning': type == 'warning',
          'text-success': type == 'success',
          'text-danger': type == 'error',
        }"
      >
        <i
          class="pi"
          :class="{
            'pi-exclamation-circle': type == 'warning',
            'pi-chevron-down': type == 'success',
            'pi-times-circle': type == 'error',
          }"
        ></i>
      </div>
      <div class="popup-title text-bold">{{ title }}</div>
      <div>{{ content }}</div>
    </div>
    <template #footer>
      <div class="text-center">
        <Button label="ตกลง" @click="close" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
const show = ref(true)

const props = defineProps({
  type: String,
  title: String,
  content: String,
  onClose: {
    type: Function,
    default: () => {},
  },
})

const close = () => {
  show.value = false
  props.onClose.apply(null, arguments)
}
</script>

<style lang="scss" scoped>
.item-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-type-icon {
  margin-bottom: 12px;
  display: inline-flex;

  .pi {
    font-size: 52px;
  }
}

.popup-title {
  font-size: 26px;
  line-height: 26px;
  margin-bottom: 6px;
}

.text-center {
  text-align: center;
}

.p-dialog .p-dialog-footer button {
  margin: 0;
}
</style>
