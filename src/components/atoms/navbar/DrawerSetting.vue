<script setup lang="ts">
import { authStore } from '@/pinia-provider'
</script>

<template>
  <VList>
    <VListItemTitle class="my-1" align="center">
      {{ authStore.user.firstName }} {{ authStore.user.lastName }}
    </VListItemTitle>
    <VListItemSubtitle class="my-1" align="center">
      <VBtn
        rounded="0"
        :to="authStore.user.id"
        block
        elevation="0"
        prepend-icon="mdi-account-outline"
        >{{ $t('drawer.account') }}</VBtn
      >
    </VListItemSubtitle>
    <VDivider />
    <VBtn
      to="/favorites"
      size="large"
      rounded="0"
      block
      elevation="0"
      prepend-icon="mdi-heart-outline"
      >{{ $t('drawer.favories') }}</VBtn
    >
    <VBtn
      to="/commands"
      size="large"
      rounded="0"
      block
      elevation="0"
      prepend-icon="mdi-food-outline"
      >{{ $t('drawer.commands') }}</VBtn
    >
    <VBtn to="/settings" size="large" block elevation="0" prepend-icon="mdi-cog-outline">{{
      $t('setting.title')
    }}</VBtn>
  </VList>
</template>
