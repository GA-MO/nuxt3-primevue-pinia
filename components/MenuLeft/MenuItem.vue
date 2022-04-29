<template>
  <div v-if="items">
    <div
      class="menu-toggle"
      :class="{
        open: isSubmenuOpen,
      }"
      @click="handleClickToggleSubmenu"
    >
      <span>{{ label }}</span> <i class="pi pi-angle-down"></i>
    </div>
    <div class="sub-menu" v-if="isSubmenuOpen">
      <div class="menu-item" v-for="{ label, icon, to } in items" :key="label">
        <NuxtLink :to="to">
          <i v-if="icon" :class="icon"></i>
          <span>{{ label }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else class="menu-item">
    <NuxtLink :to="to">
      <i v-if="icon" :class="icon"></i>
      <span>{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const $props = defineProps({
  to: String,
  icon: String,
  label: String,
  items: Array,
})

const route = useRoute()
const isSubmenuOpen = ref(false)

function isSubMenuActive(): boolean {
  if (!$props.items) return false

  const subMenuUrlList = $props.items.map(({ to }) => to)
  const isActive = subMenuUrlList.some((path) => {
    return route.path.includes(path)
  })

  return isActive
}

onMounted(() => {
  if (isSubMenuActive()) {
    isSubmenuOpen.value = true
  }
})

function handleClickToggleSubmenu() {
  isSubmenuOpen.value = !isSubmenuOpen.value
}
</script>

<style lang="scss" scoped>
.menu-toggle {
  display: flex;
  padding: 12px 20px;
  color: #999;
  text-decoration: none;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  cursor: pointer;

  &:hover,
  &.open {
    background: #272727;
  }

  i {
    margin-right: 10px;
    margin-top: 3px;
  }
}

.sub-menu {
  background: #2d2d2d;
}

.menu-item {
  a {
    display: flex;
    padding: 12px 20px;
    color: #999;
    text-decoration: none;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #252525;
    }

    &.router-link-active {
    }

    &.router-link-exact-active {
      color: #fff;
      background: #1d1d1d;

      i {
        color: var(--primary-color);
      }
    }

    i {
      margin-right: 10px;
      margin-top: 3px;
    }
  }
}
</style>
