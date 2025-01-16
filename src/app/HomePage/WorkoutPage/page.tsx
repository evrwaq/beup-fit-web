'use client'

import { DisabledButton, TitleH1 } from '@/components/atoms/StylesPallete'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import styled from 'styled-components'

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

const WorkoutTitle = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 20px;
`

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .bar-container {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    height: 10px;

    .progress {
      height: 100%;
      width: 20%; /* Atualize conforme necessário */
      background-color: #1976d2;
    }
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
  }
`

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  video {
    width: 100%;
    max-width: 800px;
    border-radius: 24px;
    box-shadow: 0px 10px 21px -3px rgba(0, 0, 0, 0.75);
  }
`

const TimerSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  .timer-box {
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
`

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;

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

  p {
    margin-top: 20px;
    font-size: 1rem;
    color: #555;
  }
`

export default function WorkoutPage() {
  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <span>
          <Link href={'/HomePage'}>
            <IoHome size={30} color="#2b2b2b" />
          </Link>

          <TitleH1>Workout Of The Day</TitleH1>
        </span>
        <nav>
          <Link href="/HomePage/Trainers">My Staff</Link>
          <DisabledButton href="/challenges">Challenges</DisabledButton>
          <DisabledButton href="/nutrition">Nutrition</DisabledButton>
        </nav>
      </Header>

      {/* Workout Title */}
      <WorkoutTitle>Advanced Core Workout</WorkoutTitle>

      {/* Progress Bar */}
      <ProgressBar>
        <p>Set 1</p>
        <div className="bar-container">
          <div className="progress" />
        </div>
        <p>1/5</p>
      </ProgressBar>

      {/* Video */}
      <VideoContainer>
        <video controls autoPlay preload="none">
          {/* Use a URL relativa sem incluir "public/" */}
          <source src="/workout.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>

      {/* Timer */}
      <TimerSection>
        <div className="timer-box">
          <h4>Hours</h4>
          <p>00</p>
        </div>
        <div className="timer-box">
          <h4>Minutes</h4>
          <p>30</p>
        </div>
        <div className="timer-box">
          <h4>Seconds</h4>
          <p>00</p>
        </div>
      </TimerSection>

      {/* Footer */}
      <Footer>
        <button>Next</button>
        <p>You've completed 1/5 sets.</p>
      </Footer>
    </PageContainer>
  )
}
