'use client'

import { DisabledButton } from '@/components/atoms/StylesPallete'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
`

const Sidebar = styled.nav`
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 15px;

      a {
        text-decoration: none;
        font-size: 1rem;
        color: #333;
        font-weight: bold;

        &:hover {
          color: #1976d2;
        }
      }
    }
  }
`

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`

const MemberCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 10px;
  }

  .buttonLink {
    padding: 8px 12px;
    font-size: 0.9rem;
    color: #ffffff;
    background-color: #1976d2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background-color: #115293;
    }
  }

  .createReportButton {
    padding: 8px 12px;
    font-size: 0.9rem;
    color: #ffffff;
    background-color: #f44336;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #d32f2f;
    }
  }
`

export default function TrainersPage() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      goal: 'Build Muscle',
      report: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      goal: 'Lose Weight',
      report: true,
    },
    {
      id: 3,
      name: 'Alice Riff',
      age: 32,
      goal: 'Hypertrophy',
      report: false,
    },
    {
      id: 4,
      name: 'Bob Brown',
      age: 30,
      goal: 'Hypertrophy',
      report: true,
    },
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
      {/* Sidebar */}
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

      {/* Main Content */}
      <MainContent>
        <SectionTitle>Members</SectionTitle>
        <MembersGrid>
          {members.map(member => (
            <MemberCard key={member.id}>
              <img src="/avatar.jpg" alt={`${member.name}'s profile`} />
              <h3>{member.name}</h3>
              <p>Age: {member.age}</p>
              <p>Goal: {member.goal}</p>
              {member.report ? (
                <Link
                  href={`/ForTrainers/Reports/EditReport?memberId=${member.id}`}
                  className="buttonLink"
                >
                  Access Training
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: '/ForTrainers/Reports/CreateReport',
                    query: { memberId: member.id },
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
