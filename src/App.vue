<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import BlankLayout from './layouts/BlankLayout.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/core'
import { provide } from 'vue'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout === 'default' ? DefaultLayout : BlankLayout
})

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
provide(DefaultApolloClient, apolloClient)

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
