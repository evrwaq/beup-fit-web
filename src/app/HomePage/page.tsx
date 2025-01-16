'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { DisabledButton } from '@/components/atoms/StylesPallete'

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`

const Sidebar = styled.aside`
  width: 240px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  nav {
    margin-top: 20px;

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      text-decoration: none;
      color: #555;
      font-weight: 500;

      &:hover {
        background-color: #f0f0f0;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`

const MainContent = styled.main`
  flex: 1;
  padding: 40px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 1.75rem;
  }

  button {
    padding: 10px 20px;
    background-color: #1976d2;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #115293;
    }
  }
`

const PlanSection = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .plan-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .plan-item {
      flex: 1;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      button {
        padding: 5px 10px;
        font-size: 0.875rem;
        background-color: #1976d2;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #115293;
        }
      }
    }

    .image {
      max-width: 150px;
      border-radius: 8px;
    }
  }
`

const ProgressSection = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 8px;
    height: 10px;
    margin-bottom: 10px;
    overflow: hidden;

    .progress {
      height: 100%;
      width: 40%; /* Valor atual do progresso */
      background-color: #1976d2;
    }
  }

  p {
    font-size: 0.875rem;
    color: #555;
  }
`

const AchievementsSection = styled.section`
  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .achievement-list {
    display: flex;
    flex-direction: column;

    .achievement-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      span {
        font-size: 0.875rem;
        color: #555;
      }
    }
  }
`

export default function Home() {
  const { userName } = useUser()

  return (
    <PageContainer>
      {/* Sidebar */}
      <Sidebar>
        <h2>BeUp Fit</h2>
        <nav>
          <Link href={'/'}>
            <svg
              width="20"
              height="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="8" />
            </svg>
            Institutional
          </Link>
          <Link href="/HomePage/WorkoutPage">WOTD</Link>
          <DisabledButton>Nutrition</DisabledButton>
          <Link href="/HomePage/Trainers">Trainers</Link>
          <Link href="/HomePage/Profile">Profile</Link>
        </nav>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <Header>
          <h1>Good morning, {userName || 'Guest'}!</h1>
          <button>Start Day</button>
        </Header>

        {/* Today's Plan */}
        <PlanSection>
          <h2>Today's Plan</h2>
          <div className="plan-grid">
            <div className="plan-item">
              <h3>Workout</h3>
              <p>Strength and Mobility</p>
              <p>30 min • Easy • 5/10</p>
              <button>Start</button>
            </div>
            <div className="plan-item">
              <h3>Nutrition</h3>
              <p>Breakfast</p>
              <p>Protein Shake</p>
              <button>Finish Meal</button>
            </div>
            <div className="plan-item image">
              <Image
                src="/workout-image.png"
                alt="Workout"
                width={150}
                height={150}
              />
            </div>
            <div className="plan-item image">
              <Image
                src="/shake-image.png"
                alt="Shake"
                width={150}
                height={150}
              />
            </div>
          </div>
        </PlanSection>

        {/* Progress */}
        <ProgressSection>
          <h2>Progress</h2>
          <div className="progress-bar">
            <div className="progress" />
          </div>
          <p>2h 40m of 6h 40m</p>
        </ProgressSection>

        {/* Achievements */}
        <AchievementsSection>
          <h2>Achievements</h2>
          <div className="achievement-list">
            <div className="achievement-item">
              <span>Workout Warrior</span>
              <span>14/20</span>
            </div>
            <div className="achievement-item">
              <span>Healthy Eater</span>
              <span>7/10</span>
            </div>
            <div className="achievement-item">
              <span>Sleep Champ</span>
              <span>3/5</span>
            </div>
          </div>
        </AchievementsSection>
      </MainContent>
    </PageContainer>
  )
}
