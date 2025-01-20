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

  const { getWorkoutByUser } = useTrainerAPI()

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
  }, [getWorkoutByUser])

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

  const handleSave = () => {
    console.log('Saved Data:', data)
    alert('Changes saved successfully!')
  }

  const handleAddRow = () => {
    setData(prevData => [
      ...prevData,
      {
        exerciseId: Date.now().toString(),
        name: '',
        weight: 0,
        repetitions: 0,
        steps: 0,
      },
    ])
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
          {data.map(row => (
            <tr key={row.exerciseId}>
              <td>{row.name}</td>
              <td>
                <input
                  type="number"
                  value={row.weight}
                  onChange={e =>
                    handleInputChange(
                      row.exerciseId,
                      'weight',
                      Number(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.repetitions}
                  onChange={e =>
                    handleInputChange(
                      row.exerciseId,
                      'repetitions',
                      Number(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.steps}
                  onChange={e =>
                    handleInputChange(
                      row.exerciseId,
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
