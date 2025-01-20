'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { IoHome } from 'react-icons/io5'
import { useTrainerAPI } from '@/api/hooks'
import { PageContainer, SectionTitle, Table, ButtonContainer } from './styles'

export default function CreateWorkoutPlan() {
  const [data, setData] = useState([
    { id: 1, exerciseId: '', weight: '', reps: '', sets: '' },
  ])
  const [exercises, setExercises] = useState<{ id: string; name: string }[]>([])
  const { getExercises } = useTrainerAPI()

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
      { id: Date.now(), exerciseId: '', weight: '', reps: '', sets: '' },
    ])
  }

  const handleClear = () => {
    setData([{ id: 1, exerciseId: '', weight: '', reps: '', sets: '' }])
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
                  placeholder="Sets"
                  value={row.sets}
                  onChange={e =>
                    handleInputChange(row.id, 'sets', e.target.value)
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
        <button className="saveButton" onClick={() => {}}>
          Save Plan
        </button>
        <button className="saveButton" onClick={handleAddRow}>
          Add Row
        </button>
      </ButtonContainer>
    </PageContainer>
  )
}
