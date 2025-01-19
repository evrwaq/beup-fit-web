'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoHome } from 'react-icons/io5'
import {
  PageContainer,
  SectionTitle,
  MemberInfo,
  Table,
  ButtonContainer,
  DisabledDiv,
} from './styles'

export default function WorkoutReports() {
  const [data, setData] = useState([
    { id: 1, equipment: 'Bench Press', weight: '50', reps: '12', sets: '3' },
    { id: 2, equipment: 'Squat Rack', weight: '80', reps: '10', sets: '4' },
    { id: 3, equipment: 'Pull-Up Bar', weight: '-', reps: '8', sets: '3' },
    { id: 4, equipment: 'Dumbbells', weight: '20', reps: '15', sets: '3' },
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
      { id: Date.now(), equipment: '', weight: '', reps: '', sets: '' },
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
      <MemberInfo>Member: John Doe</MemberInfo>

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
                  value={row.weight}
                  onChange={e =>
                    handleInputChange(row.id, 'weight', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.reps}
                  onChange={e =>
                    handleInputChange(row.id, 'reps', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
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
