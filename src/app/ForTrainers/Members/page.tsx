'use client'

import { useEffect, useState } from 'react'
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
import { Member, useTrainerAPI } from '@/api/hooks'

export default function TrainersPage() {
  const [members, setMembers] = useState<Member[] | undefined>([])
  const { getMembers } = useTrainerAPI()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMembers('trainer1')
        setMembers(response)
      } catch (error) {
        console.error('Error fetching members:', error)
      }
    }

    fetchData()
  }, [getMembers])

  const handleReportCreated = (memberId: string) => {
    setMembers(prevMembers =>
      prevMembers!.map(member =>
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
          {members!.map(({ id, name, age, goal, hasWorkout }) => (
            <MemberCard key={id}>
              <img src="/avatar.jpg" alt={`${name}'s profile`} />
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <p>Goal: {goal}</p>
              {!hasWorkout ? (
                <Link
                  href={{
                    pathname: '/ForTrainers/Reports/CreateReport',
                    query: { memberId: id },
                  }}
                  className="createReportButton"
                >
                  Create Report
                </Link>
              ) : (
                <Link
                  href={`/ForTrainers/Reports/EditReport?memberId=${id}`}
                  className="buttonLink"
                >
                  Access Training
                </Link>
              )}
            </MemberCard>
          ))}
        </MembersGrid>
      </MainContent>
    </PageContainer>
  )
}
