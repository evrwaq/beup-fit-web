'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { IoHome } from 'react-icons/io5'
import { useTrainerAPI } from '@/api/hooks'
import {
  PageContainer,
  SectionTitle,
  MemberInfo,
  Table,
  ButtonContainer,
  DisabledDiv,
} from './styles'

export default function WorkoutReports() {
  const [data, setData] = useState<
    {
      exerciseId: string
      name: string
      weight: number
      repetitions: number
      steps: number
    }[]
  >([])

  const [userName, setUserName] = useState('')

  const { getWorkoutByUser, updateWorkout } = useTrainerAPI()

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const workout = await getWorkoutByUser('trainer1', 'user1')
        setData(workout.workouts)
        setUserName(workout.userName)
      } catch (err) {
        console.error('Failed to fetch workout:', err)
      }
    }

    fetchWorkout()
  }, [])

  const handleInputChange = (
    exerciseId: string,
    field: string,
    value: string | number
  ) => {
    setData(prevData =>
      prevData.map(row =>
        row.exerciseId === exerciseId ? { ...row, [field]: value } : row
      )
    )
  }

  const handleClear = () => {
    setData([])
  }

  const handleSave = async () => {
    try {
      await updateWorkout('trainer1', 'user1', data)
      alert('Workout updated successfully!')
    } catch (err) {
      console.error('Failed to update workout:', err)
      alert('Failed to update workout.')
    }
  }

  const handleAddRow = () => {
    const newRow = {
      exerciseId: `new-${Date.now()}`,
      name: '',
      repetitions: 0,
      weight: 0,
      steps: 0,
    }
    setData(prevWorkouts => [...prevWorkouts, newRow])
  }

  return (
    <PageContainer>
      <SectionTitle>
        <Link href={'/ForTrainers/Members'}>
          <IoHome size={30} color="#2b2b2b" />
        </Link>
        Workout Reports
      </SectionTitle>
      <MemberInfo>Member: {userName}</MemberInfo>

      <Table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Weight (kg)</th>
            <th>Reps</th>
            <th>Steps</th>
          </tr>
        </thead>
        <tbody>
          {data.map((workout, index) => (
            <tr key={workout.exerciseId || `row-${index}`}>
              <td>
                <input
                  type="text"
                  value={workout.name}
                  placeholder="Enter exercise name"
                  onChange={e =>
                    handleInputChange(
                      workout.exerciseId,
                      'name',
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={workout.repetitions}
                  onChange={e =>
                    handleInputChange(
                      workout.exerciseId,
                      'repetitions',
                      Number(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={workout.weight}
                  onChange={e =>
                    handleInputChange(
                      workout.exerciseId,
                      'weight',
                      Number(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={workout.steps}
                  onChange={e =>
                    handleInputChange(
                      workout.exerciseId,
                      'steps',
                      Number(e.target.value)
                    )
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
        <button className="saveButton" onClick={handleSave}>
          Save
        </button>
        <button className="saveButton" onClick={handleAddRow}>
          Add Row
        </button>
      </ButtonContainer>

      <DisabledDiv>Create Workout List</DisabledDiv>
    </PageContainer>
  )
}
