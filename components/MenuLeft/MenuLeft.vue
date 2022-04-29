<template>
  <div class="box-menu">
    <div class="logo-top" @click="handleClickLogo">
      <img src="@/assets/images/logo-light.png" alt="" />
    </div>
    <div class="menu-list">
      <MenuItem
        v-for="{ label, icon, to, items } in items"
        :key="label"
        :icon="icon"
        :label="label"
        :to="to"
        :items="items"
      />
    </div>
    <div class="footer p-fluid">
      <Button label="Logout" icon="pi pi-sign-out" class="button-logout" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    default: [],
  },
})

function handleClickLogo() {
  navigateTo('/')
}
</script>

<style lang="scss" scoped>
.box-menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo-top {
  padding: 25px;
  cursor: pointer;

  img {
    width: 100%;
  }
}

.menu-list {
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.footer {
  padding: 20px;
}

.button-logout {
  background: #1d1d1d !important;
  border: none;
}
</style>
