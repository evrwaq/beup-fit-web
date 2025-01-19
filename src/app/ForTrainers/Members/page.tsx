'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DisabledButton } from '@/components/atoms/StylesPallete'
import {
  MainContent,
  MemberCard,
  MembersGrid,
  PageContainer,
  SectionTitle,
  Sidebar,
} from './styles'

export default function TrainersPage() {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', age: 25, goal: 'Build Muscle', report: true },
    { id: 2, name: 'Jane Smith', age: 28, goal: 'Lose Weight', report: true },
    { id: 3, name: 'Alice Riff', age: 32, goal: 'Hypertrophy', report: false },
    { id: 4, name: 'Bob Brown', age: 30, goal: 'Hypertrophy', report: true },
  ])

  const handleReportCreated = (memberId: number) => {
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === memberId ? { ...member, report: true } : member
      )
    )
  }

  return (
    <PageContainer>
      <Sidebar>
        <h2>Menu</h2>
        <ul>
          <li>
            <a href="#members">Members</a>
          </li>
          <li>
            <DisabledButton href="#workouts">Workouts</DisabledButton>
          </li>
          <li>
            <DisabledButton href="#milestones">Milestones</DisabledButton>
          </li>
        </ul>
      </Sidebar>

      <MainContent>
        <SectionTitle>Members</SectionTitle>
        <MembersGrid>
          {members.map(({ id, name, age, goal, report }) => (
            <MemberCard key={id}>
              <img src="/avatar.jpg" alt={`${name}'s profile`} />
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <p>Goal: {goal}</p>
              {report ? (
                <Link
                  href={`/ForTrainers/Reports/EditReport?memberId=${id}`}
                  className="buttonLink"
                >
                  Access Training
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: '/ForTrainers/Reports/CreateReport',
                    query: { memberId: id },
                  }}
                  className="createReportButton"
                >
                  Create Report
                </Link>
              )}
            </MemberCard>
          ))}
        </MembersGrid>
      </MainContent>
    </PageContainer>
  )
}
