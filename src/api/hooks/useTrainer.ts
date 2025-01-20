const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export type Member = {
  id: string
  name: string
  age: number
  goal: string
}

export const useTrainerAPI = () => {
  const getMembers = async (trainerId: string) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/trainers/${trainerId}/users`
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch members: ${response.statusText}`)
      }

      const data = await response.json()

      if (data && data.users) {
        return data.users
      } else {
        throw new Error('Unexpected response format')
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message)
        throw new Error(err.message)
      } else {
        console.error('An unknown error occurred')
        throw new Error('An unknown error occurred')
      }
    }
  }

  return {
    getMembers,
  }
}
