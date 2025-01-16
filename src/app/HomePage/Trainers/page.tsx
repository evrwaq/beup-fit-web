'use client'

import styled from 'styled-components'
import { useState } from 'react'
import { TitleH1 } from '@/components/atoms/StylesPallete'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    text-align: left;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
    }

    a:visited {
      color: none;
    }
  }
`

const WorkoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  td {
    font-size: 0.9rem;
  }
`

const ProgressCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  .progress-bar-container {
    background-color: #e0e0e0;
    border-radius: 8px;
    height: 20px;
    overflow: hidden;
    margin-top: 10px;

    .progress-bar {
      height: 100%;
      width: 90%;
      background-color: #1976d2;
    }
  }
`

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const InputContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
`

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
