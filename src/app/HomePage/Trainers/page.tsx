'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import { TitleH1 } from '@/components/atoms/StylesPallete'
import {
  PageContainer,
  HeroSection,
  Section,
  WorkoutTable,
  ScheduleList,
  ProgressCard,
  InputContainer,
} from './styles'

export default function TrainersPage() {
  const [progress, setProgress] = useState(50) // Progresso inicial do objetivo

  return (
    <PageContainer>
      <HeroSection>
        <span>
          <Link href={'/HomePage'}>
            <IoHome size={30} color="#2b2b2b" />
          </Link>
          <TitleH1>Trainer Dashboard</TitleH1>
        </span>

        {/* Workout Table */}
        <Section>
          <h2>Workout Reports</h2>
          <WorkoutTable>
            <thead>
              <tr>
                <th>Equipment</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Sets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leg Press</td>
                <td>80kg</td>
                <td>12</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Barbell Squats</td>
                <td>60kg</td>
                <td>10</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Hip Thrust</td>
                <td>100kg</td>
                <td>15</td>
                <td>3</td>
              </tr>
            </tbody>
          </WorkoutTable>
        </Section>
      </HeroSection>

      {/* Schedule */}
      <Section>
        <h2>Training Schedule</h2>
        <ScheduleList>
          <li>
            <span>Monday - 6:00 PM</span>
            <span>Glutes & Legs</span>
          </li>
          <li>
            <span>Wednesday - 6:00 PM</span>
            <span>Back & Biceps</span>
          </li>
          <li>
            <span>Friday - 6:00 PM</span>
            <span>Chest & Triceps</span>
          </li>
        </ScheduleList>
      </Section>

      {/* Progress Cards */}
      <Section>
        <h2>Progress Goals</h2>
        <ProgressCard>
          <h3>Glutes</h3>
          <p>Current: 90cm</p>
          <p>Target: 120cm</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>Progress: {progress}%</p>
        </ProgressCard>

        <ProgressCard>
          <h3>Leg Strength</h3>
          <p>Current: 80kg Leg Press</p>
          <p>Target: 120kg Leg Press</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `67%` }}></div>
          </div>
          <p>Progress: 67%</p>
        </ProgressCard>
      </Section>

      {/* Input to Adjust Progress */}
      <Section>
        <h2>Update Progress</h2>
        <InputContainer>
          <label htmlFor="progress">Update Glutes Progress (%)</label>
          <input
            type="number"
            id="progress"
            value={progress}
            onChange={e => setProgress(Number(e.target.value))}
            min="0"
            max="100"
          />
        </InputContainer>
      </Section>
    </PageContainer>
  )
}
