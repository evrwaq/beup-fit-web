'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { TitleH1 } from '@/components/atoms/StylesPallete'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px;
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
  }

  .close-btn {
    margin-top: 10px;
    color: #555;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isLogInOpen, setIsLogInOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' }) // Estado para erros
  const router = useRouter()

  const validateForm = () => {
    let isValid = true
    const newErrors = { email: '', password: '' }

    if (!email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format'
      isValid = false
    }

    if (!password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleLogIn = (event: React.FormEvent) => {
    event.preventDefault()

    if (validateForm()) {
      console.log('Login successful')

      // Simulando autenticação
      setTimeout(() => {
        router.push('/HomePage') // Redireciona para a página HomePage
      }, 1000)
    }
  }

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <TitleH1>Welcome to BeUp Fit</TitleH1>
          <p>
            Your personalized fitness and nutrition app, connecting you with
            world-class trainers and nutritionists, and helping you achieve your
            health goals.
          </p>
          <div>
            <button onClick={() => setIsSignUpOpen(true)}>Sign Up</button>
            <button onClick={() => setIsLogInOpen(true)}>Log In</button>
          </div>
        </HeroContent>
        <HeroImage>
          <Image
            src="/hero-image.png"
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
          {/* Feature Cards */}
          <FeatureCard>
            <Image
              src="/trainer-icon.png"
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
          <FeatureCard>
            <Image
              src="/trainer-icon.png"
              alt="Trainer Icon"
              width={80}
              height={80}
            />
            <h3>Unlock your personalized workout plan</h3>
            <p>
              Get a personalized workout plan to help you reach your goals,{' '}
              whether you´re a begginer or an athlete
            </p>
          </FeatureCard>
          <FeatureCard>
            <Image
              src="/trainer-icon.png"
              alt="Trainer Icon"
              width={80}
              height={80}
            />
            <h3>Get personalized nutrition plans</h3>
            <p>
              Get a nutrition plan designed for you, based on your goals,
              preferences and lifestyle
            </p>
          </FeatureCard>
          <FeatureCard>
            <Image
              src="/trainer-icon.png"
              alt="Trainer Icon"
              width={80}
              height={80}
            />
            <h3>Join Live group classes</h3>
            <p>
              Join live grupo classes in our sudio, from anywhere in the world.
            </p>
          </FeatureCard>
          {/* Add other feature cards */}
        </FeaturesGrid>
      </MembershipSection>

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <button
              className="close-btn"
              onClick={() => setIsSignUpOpen(false)}
            >
              Close
            </button>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Log In Modal */}
      {isLogInOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Log In</h2>
            <form onSubmit={handleLogIn}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <button type="submit">Log In</button>
            </form>
            <button className="close-btn" onClick={() => setIsLogInOpen(false)}>
              Close
            </button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  )
}
