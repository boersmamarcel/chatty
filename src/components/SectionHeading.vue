<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; center?: boolean }>();
</script>

<template>
  <div :class="['max-w-3xl', center ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-wider text-primary">
      {{ eyebrow }}
    </p>
    <h2 class="mt-2 text-3xl font-bold leading-tight md:text-5xl">{{ title }}</h2>
    <div class="mt-4 text-lg leading-relaxed text-muted-foreground">
      <slot />
    </div>
  </div>
</template>
