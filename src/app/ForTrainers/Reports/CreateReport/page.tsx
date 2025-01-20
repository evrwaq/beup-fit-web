'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { IoHome } from 'react-icons/io5'
import { useTrainerAPI } from '@/api/hooks'
import { PageContainer, SectionTitle, Table, ButtonContainer } from './styles'

export default function CreateWorkoutPlan() {
  const [data, setData] = useState([
    { id: 1, exerciseId: '', weight: '', reps: '', steps: '' },
  ])
  const [exercises, setExercises] = useState<{ id: string; name: string }[]>([])
  const { getExercises, addWorkout } = useTrainerAPI()

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const exercisesData = await getExercises()
        setExercises(exercisesData)
      } catch (err) {
        console.error('Failed to fetch exercises:', err)
      }
    }

    fetchExercises()
  }, [])

  const handleInputChange = (id: number, field: string, value: string) => {
    setData(prevData =>
      prevData.map(row => (row.id === id ? { ...row, [field]: value } : row))
    )
  }

  const handleAddRow = () => {
    setData(prevData => [
      ...prevData,
      { id: Date.now(), exerciseId: '', weight: '', reps: '', steps: '' },
    ])
  }

  const handleClear = () => {
    setData([{ id: 1, exerciseId: '', weight: '', reps: '', steps: '' }])
  }

  const handleSavePlan = async () => {
    const workouts = data.map(({ exerciseId, weight, reps, steps }) => ({
      exerciseId,
      weight: parseInt(weight, 10),
      repetitions: parseInt(reps, 10),
      steps: parseInt(steps, 10),
    }))

    try {
      const response = await addWorkout('trainer1', 'user3', workouts)
      console.log('Workout plan saved successfully:', response)
      alert('Workout plan saved successfully!')
    } catch (error) {
      console.error('Failed to save workout plan:', error)
      alert('Failed to save workout plan')
    }
  }

  return (
    <PageContainer>
      <SectionTitle>
        <Link href={'/ForTrainers/Members'}>
          <IoHome size={30} color="#2b2b2b" />
        </Link>
        Create Workout Plan
      </SectionTitle>

      <Table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Weight (kg)</th>
            <th>Reps</th>
            <th>Sets</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>
                <select
                  value={row.exerciseId}
                  onChange={e =>
                    handleInputChange(row.id, 'exerciseId', e.target.value)
                  }
                >
                  <option value="">Select Exercise</option>
                  {exercises.map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Weight"
                  value={row.weight}
                  onChange={e =>
                    handleInputChange(row.id, 'weight', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Reps"
                  value={row.reps}
                  onChange={e =>
                    handleInputChange(row.id, 'reps', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Steps"
                  value={row.steps}
                  onChange={e =>
                    handleInputChange(row.id, 'steps', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ButtonContainer>
        <button className="clearButton" onClick={handleClear}>
          Clear All
        </button>
        <button className="saveButton" onClick={handleSavePlan}>
          Save Plan
        </button>
        <button className="saveButton" onClick={handleAddRow}>
          Add Row
        </button>
      </ButtonContainer>
    </PageContainer>
  )
}
