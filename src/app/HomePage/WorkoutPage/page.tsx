'use client'

import { DisabledButton, TitleH1 } from '@/components/atoms/StylesPallete'
import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import {
  PageContainer,
  Header,
  WorkoutTitle,
  ProgressBar,
  VideoContainer,
  TimerSection,
  Footer,
} from './styles'

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
