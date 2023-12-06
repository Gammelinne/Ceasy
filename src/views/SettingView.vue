<script setup lang="ts">
import LanguageSelector from '@/components/atoms/navbar/LanguageSelector.vue';
import ThemeToggleButton from '@/components/atoms/navbar/ThemeToggleButton.vue';
</script>

<template>
    <VContainer>
        <VCard>
            <VCardTitle class="text-center">{{ $t('setting.title') }}</VCardTitle>
            <VCardItem>
                <LanguageSelector/>
            </VCardItem>
            <VCardItem>
                <ThemeToggleButton/>
            </VCardItem>
        </VCard>
    </VContainer>
</template>