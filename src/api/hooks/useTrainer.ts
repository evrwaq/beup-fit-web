import { useState } from 'react'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

type Member = {
  id: string
  name: string
  age: number
  goal: string
}

export const useTrainerAPI = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getMembers = async (trainerId: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${API_BASE_URL}/trainers/${trainerId}/users`
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch members: ${response.statusText}`)
      }

      const data: Member[] = await response.json()
      setMembers(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    members,
    loading,
    error,
    getMembers,
  }
}
