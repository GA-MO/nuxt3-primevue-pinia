<template>
  <div class="page">
    <Button
      label="Get News"
      @click="handleClickGetNews"
      :loading="wait.is('getNews')"
    />

    <Button
      label="Get News Error"
      @click="handleClickGetNewsError"
      :loading="wait.is('getNewsError')"
    />

    <Button label="Clear" @click="handleClickClearNews" />

    <div class="news-list">
      <div
        class="item"
        v-for="{ id, title, body } in newsStore.newsList"
        :key="id"
      >
        <Card>
          <template #title>{{ title }}</template>
          <template #content>{{ body }}</template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNewsStore } from '../stores/news'

const newsStore = useNewsStore()
const wait = useWait()

function handleClickGetNews() {
  wait.start('getNews', newsStore.getNews)
}

function handleClickGetNewsError() {
  wait.start('getNewsError', newsStore.getNewsError)
}

function handleClickClearNews() {
  newsStore.newsList = []
}
</script>

<style lang="scss" scoped>
.page {
  padding: 40px;
  min-height: 100vh;
  background: #f1f1f1;
  text-align: center;
}

.p-button + .p-button {
  margin-left: 5px;
}

.news-list {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 33.33%;
    margin-bottom: 10px;
    padding: 10px;
    text-align: left;

    .p-card-title {
      text-transform: capitalize;
    }
  }
}
</style>
