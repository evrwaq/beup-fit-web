'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoHome } from 'react-icons/io5'
import { PageContainer, SectionTitle, Table, ButtonContainer } from './styles'

type CreateWorkoutPlanProps = {
  memberId: number
  onReportCreated: (memberId: number) => void
}

export default function CreateWorkoutPlan({
  memberId,
  onReportCreated,
}: CreateWorkoutPlanProps) {
  const [data, setData] = useState([
    { id: 1, equipment: '', weight: '', reps: '', sets: '' },
  ])

  const [equipmentOptions] = useState([
    'Bench Press',
    'Squat Rack',
    'Pull-Up Bar',
    'Dumbbells',
    'Treadmill',
  ])

  const handleInputChange = (id: number, field: string, value: string) => {
    setData(prevData =>
      prevData.map(row => (row.id === id ? { ...row, [field]: value } : row))
    )
  }

  const handleAddRow = () => {
    setData(prevData => [
      ...prevData,
      { id: Date.now(), equipment: '', weight: '', reps: '', sets: '' },
    ])
  }

  const handleClear = () => {
    setData([{ id: 1, equipment: '', weight: '', reps: '', sets: '' }])
  }

  const handleSave = async () => {
    try {
      const response = await fetch('/api/saveWorkoutPlan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId, plan: data }),
      })

      if (response.ok) {
        alert('Workout plan created successfully!')
        onReportCreated(memberId)
      } else {
        alert('Error saving workout plan.')
      }
    } catch (error) {
      console.error('Error saving workout plan:', error)
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
            <th>Equipment</th>
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
                  value={row.equipment}
                  onChange={e =>
                    handleInputChange(row.id, 'equipment', e.target.value)
                  }
                >
                  <option value="">Select Equipment</option>
                  {equipmentOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
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
        <button className="saveButton" onClick={handleSave}>
          Save Plan
        </button>
        <button className="saveButton" onClick={handleAddRow}>
          Add Row
        </button>
      </ButtonContainer>
    </PageContainer>
  )
}
