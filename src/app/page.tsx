'use client'

import styled from 'styled-components'
import Image from 'next/image'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`

const HeroContent = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #1976d2;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #115293;
    }
  }
`

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

const MembershipSection = styled.section`
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const FeatureCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 80px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>Welcome to BeUp Fit</h1>
          <p>
            Your personalized fitness and nutrition app, connecting you with
            world-class trainers and nutritionists, and helping you achieve your
            health goals.
          </p>
          <button>Sign Up</button>
        </HeroContent>
        <HeroImage>
          <Image
            src="/hero-image.png" // Substitua pelo caminho correto da imagem
            alt="BeUp Fit Hero"
            width={400}
            height={300}
          />
        </HeroImage>
      </HeroSection>

      {/* Membership Section */}
      <MembershipSection>
        <h2>Your BeUp Fit membership includes</h2>
        <FeaturesGrid>
          {/* Feature 1 */}
          <FeatureCard>
            <Image
              src="/trainer-icon.png" // Substitua pelo caminho correto
              alt="Trainer Icon"
              width={80}
              height={80}
            />
            <h3>Connect with world-class trainers</h3>
            <p>
              Work out with the best trainers in the world. Train live or
              on-demand, on your schedule.
            </p>
          </FeatureCard>

          {/* Feature 2 */}
          <FeatureCard>
            <Image
              src="/nutrition-icon.png" // Substitua pelo caminho correto
              alt="Nutrition Icon"
              width={80}
              height={80}
            />
            <h3>Get personalized nutrition plans</h3>
            <p>
              Get a nutrition plan designed for you, based on your goals,
              preferences, and lifestyle.
            </p>
          </FeatureCard>

          {/* Feature 3 */}
          <FeatureCard>
            <Image
              src="/workout-icon.png" // Substitua pelo caminho correto
              alt="Workout Icon"
              width={80}
              height={80}
            />
            <h3>Unlock your personalized workout plan</h3>
            <p>
              Get a workout plan tailored to help you reach your fitness goals,
              whether you're a beginner or an athlete.
            </p>
          </FeatureCard>

          {/* Feature 4 */}
          <FeatureCard>
            <Image
              src="/classes-icon.png" // Substitua pelo caminho correto
              alt="Classes Icon"
              width={80}
              height={80}
            />
            <h3>Join live group classes</h3>
            <p>
              Join live group classes in our studio, from anywhere in the world.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </MembershipSection>
    </PageContainer>
  )
}
