<script setup lang="ts">
import { authStore } from '@/pinia-provider'
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()?.appContext.config.globalProperties
</script>

<template>
  <VList>
    <VListItemTitle class="my-1" align="center">
      {{ authStore.user.firstName }} {{ authStore.user.lastName }}
    </VListItemTitle>
    <VListItemSubtitle>
      <VBtn
        rounded="0"
        size="small"
        @click="instance?.$router.push('profile')"
        block
        elevation="0"
        prepend-icon="mdi-account-outline"
        >{{ $t('drawer.account') }}</VBtn
      >
    </VListItemSubtitle>
    <VDivider />
    <VBtn
      @click="instance?.$router.push('/favorites')"
      size="large"
      rounded="0"
      block
      elevation="0"
      prepend-icon="mdi-heart-outline"
      >{{ $t('drawer.favories') }}</VBtn
    >
    <VBtn
      @click="instance?.$router.push('/commands')"
      size="large"
      rounded="0"
      block
      elevation="0"
      prepend-icon="mdi-food-outline"
      >{{ $t('drawer.commands') }}</VBtn
    >
    <VBtn @click="instance?.$router.push('/settings')" size="large" block elevation="0" prepend-icon="mdi-cog-outline">{{
      $t('setting.title')
    }}</VBtn>
  </VList>
</template>
