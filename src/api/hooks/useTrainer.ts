const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export type Member = {
  id: string
  name: string
  age: number
  goal: string
}

export type Workout = {
  id: string
  userId: string
  exercises: {
    equipment: string
    weight: string
    reps: string
    sets: string
  }[]
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

  const getWorkoutByUser = async (trainerId: string, userId: string) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/trainers/${trainerId}/users/${userId}/workout`
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch workout: ${response.statusText}`)
      }

      const data = await response.json()

      if (data) {
        return data
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

  const updateWorkout = async (
    trainerId: string,
    userId: string,
    workouts: {
      exerciseId: string
      repetitions: number
      weight: number
      steps: number
    }[]
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/trainers/${trainerId}/users/${userId}/workout`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ workouts }),
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to update workout: ${response.statusText}`)
      }

      return await response.json()
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

  const getExercises = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/trainers/exercises`)

      if (!response.ok) {
        throw new Error(`Failed to fetch exercises: ${response.statusText}`)
      }

      const data = await response.json()

      if (data) {
        return data
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

  const addWorkout = async (
    trainerId: string,
    userId: string,
    workouts: {
      exerciseId: string
      repetitions: number
      weight: number
      steps: number
    }[]
  ) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/trainers/${trainerId}/users/${userId}/workout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ workouts }),
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to add workout: ${response.statusText}`)
      }

      const data = await response.json()

      if (data) {
        return data
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
    getWorkoutByUser,
    updateWorkout,
    getExercises,
    addWorkout,
  }
}
