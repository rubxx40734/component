<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import BlankLayout from './layouts/BlankLayout.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
// import { setContext } from '@apollo/client/link/core'
import { provide } from 'vue'
import { setCssVar } from 'quasar';


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

setCssVar('primary', '#f9d950');
setCssVar('secondary', '#5D4E46'); //#4B3B40; #69584F
setCssVar('positive', '#218380');
setCssVar('negative', '#AB3428');
setCssVar('info', '#3C779B');
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
