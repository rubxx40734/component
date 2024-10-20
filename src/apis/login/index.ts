
import gql from 'graphql-tag'
import { type LoginInputEntry, type LoginOutput } from '@/apis/graphql-schema'
import { useApolloClient } from '@vue/apollo-composable'

export function useLoginAdmin() {
  const apolloClient = useApolloClient()
  // 要特別注意不能使用useMutation這個hook 因為這個hook只能在setup內使用
  return {
    login: async (input: LoginInputEntry) => {

      const mutation = gql`
      mutation AdminLogin($in: LoginInputEntry!) {
        adminLogin(in: $in) {
          accessToken
          expiresAt
        }
      }
    `
      try {
        const result = await apolloClient.client.mutate({
          mutation,
          variables: {
            in: {
              ...input
            }
          }
        })

        return result.data?.adminLogin as LoginOutput
      } catch (error) {
        console.error('Mutation error:', error)
        throw error
      }
    }
  }
}