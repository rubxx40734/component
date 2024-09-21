<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>
<template>
  <div class="flex flex-col min-h-[90vh]">
    <header class="mb-10">
      <NavBar></NavBar>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer class="mt-auto">
      <p>&copy; 2024 My Application</p>
    </footer>
  </div>
</template>
