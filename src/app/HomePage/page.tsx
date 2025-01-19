'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { DisabledButton } from '@/components/atoms/StylesPallete'
import {
  PageContainer,
  Sidebar,
  MainContent,
  Header,
  PlanSection,
  ProgressSection,
  AchievementsSection,
} from './styles'

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
                src="/halteres.png"
                alt="Workout"
                width={350}
                height={180}
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
