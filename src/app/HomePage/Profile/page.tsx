'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { DisabledButton } from '@/components/atoms/StylesPallete'
import {
  Header,
  PageContainer,
  ProfileSection,
  ProgressSection,
  Tabs,
} from './styles'

export default function ProfilePage() {
  const { userName, userPhoto } = useUser()

  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <h1>BeUp Fit</h1>
        <nav>
          <a href="/HomePage">Home</a>
          <a href="/HomePage/Trainers">Trainers</a>
          <Link href="/HomePage/WorkoutPage">WOTD</Link>
          <DisabledButton>Nutrition</DisabledButton>
        </nav>
      </Header>

      {/* Profile Section */}
      <ProfileSection>
        <div className="profile-info">
          {userPhoto && (
            <Image
              src={userPhoto}
              alt={`${userName}'s profile`}
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
          )}
          <div className="details">
            <h2>{userName || 'Guest'}</h2>
            <p>San Francisco, CA</p>
            <p>2,384 followers • 1,000 following</p>
          </div>
        </div>
        <div className="buttons">
          <button className="edit">Edit profile</button>
          <button className="add">Add friend</button>
        </div>
      </ProfileSection>

      {/* Tabs */}
      <Tabs>
        <a href="#progress" className="active">
          Progress
        </a>
        <a href="#badges">Badges</a>
        <a href="#leaderboard">Leaderboard</a>
      </Tabs>

      {/* Daily Progress */}
      <ProgressSection>
        <h3>Daily Progress</h3>
        <div className="progress-grid">
          <div className="progress-item">
            <h4>Steps</h4>
            <p>1,234</p>
          </div>
          <div className="progress-item">
            <h4>Exercise</h4>
            <p>30 min</p>
          </div>
          <div className="progress-item">
            <h4>Stand</h4>
            <p>12/12</p>
          </div>
        </div>
      </ProgressSection>
    </PageContainer>
  )
}
