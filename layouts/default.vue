<template>
  <div class="app-layout">
    <div class="app-menu-left">
      <MenuLeft :items="menuList" />
    </div>
    <div class="app-content-body">
      <div class="nav-bar">
        <!-- <Navbar /> -->
      </div>
      <div class="page-render">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'

const menuList = ref([])

onMounted(async () => {
  const menuResponse = await axios.get('/jsonMockup/menuList.json')
  menuList.value = menuResponse.data.data
  console.log('menuList', menuList.value)
})
</script>

<style lang="scss" scoped>
.app-layout {
  height: 100vh;
  display: flex;
}

.app-menu-left {
  width: 260px;
  background: #333;
  flex-shrink: 0;
}

.app-content-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.page-render {
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
}
</style>
