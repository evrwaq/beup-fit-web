'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { DisabledButton } from '@/components/atoms/StylesPallete'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      font-size: 1rem;
      text-decoration: none;
      color: #1976d2;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  .profile-info {
    display: flex;
    align-items: center;
    gap: 20px;

    .details {
      h2 {
        font-size: 1.5rem;
        margin-bottom: 5px;
      }

      p {
        font-size: 1rem;
        color: #555;
        margin-bottom: 5px;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 10px;

    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;

      &.edit {
        background-color: #e0e0e0;
        color: #555;

        &:hover {
          background-color: #d5d5d5;
        }
      }

      &.add {
        background-color: #1976d2;
        color: white;

        &:hover {
          background-color: #115293;
        }
      }
    }
  }
`

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #555;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;

    &:hover,
    &.active {
      color: #1976d2;
      border-bottom: 2px solid #1976d2;
    }
  }
`

const ProgressSection = styled.section`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .progress-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .progress-item {
      background-color: #ffffff;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h4 {
        font-size: 1rem;
        color: #555;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
`

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
              src={userPhoto} // Substitua pelo caminho correto da imagem
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
