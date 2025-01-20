'use client'

import Image from 'next/image'
import { TitleH1 } from '@/components/atoms/StylesPallete'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import bgLP from '/public/bg-lp.png'
import icon1 from '/public/icon1.png'
import icon2 from '/public/nutrition.png'
import icon3 from '/public/online.png'
import icon4 from '/public/icon4.png'
import { useUser } from '@/context/UserContext'
import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroImage,
  MembershipSection,
  FeaturesGrid,
  FeatureCard,
  SignUp,
  LogIn,
  ModalOverlay,
  ModalContainer,
} from './styles'

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isLogInOpen, setIsLogInOpen] = useState(false)
  const [isLogInTrainersOpen, setIsLogInTrainersOpen] = useState(false)
  const [name, setName] = useState('')
  const { setUserName } = useUser()
  const [photo, setPhoto] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })
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

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault()

    if (name.trim()) {
      setUserName(name)
      setIsSignUpOpen(false)
      alert('Profile created successfully!')
    } else {
      alert('Please enter a valid name')
    }
  }

  const handleLogIn = (event: React.FormEvent) => {
    event.preventDefault()

    if (validateForm()) {
      console.log('Login successful')
      setTimeout(() => router.push('/HomePage'), 1000)
    }
  }

  const handleLogInTrainer = (event: React.FormEvent) => {
    event.preventDefault()

    if (validateForm()) {
      console.log('Trainer login successful')
      setTimeout(() => router.push('/ForTrainers/Members'), 1000)
    }
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <TitleH1>Welcome to BeUp Fit</TitleH1>
          <p>
            Your personalized fitness and nutrition app, connecting you with
            world-class trainers and nutritionists.
          </p>
          <div>
            <SignUp onClick={() => setIsSignUpOpen(true)}>Sign Up</SignUp>
            <LogIn onClick={() => setIsLogInOpen(true)}>Log In</LogIn>
          </div>
          <div>
            <span
              className="personal-span"
              onClick={() => setIsLogInTrainersOpen(true)}
            >
              Are you a Personal Trainer? Log In here!
            </span>
          </div>
        </HeroContent>
        <HeroImage>
          <Image src={bgLP} alt="BeUp Fit Hero" width={600} height={500} />
        </HeroImage>
      </HeroSection>

      <MembershipSection>
        <h2>Your BeUp Fit membership includes</h2>
        <FeaturesGrid>
          <FeatureCard>
            <Image src={icon1} alt="Trainer Icon" width={210} height={120} />
            <h3>Connect with world-class trainers</h3>
            <p>Work out with the best trainers in the world.</p>
          </FeatureCard>
          <FeatureCard>
            <Image
              src={icon4}
              alt="Personalized Plan"
              width={210}
              height={120}
            />
            <h3>Unlock your personalized workout plan</h3>
            <p>Get a plan tailored to your goals.</p>
          </FeatureCard>
          <FeatureCard>
            <Image src={icon2} alt="Nutrition Icon" width={210} height={120} />
            <h3>Get personalized nutrition plans</h3>
            <p>Designed based on your lifestyle and preferences.</p>
          </FeatureCard>
          <FeatureCard>
            <Image src={icon3} alt="Online Classes" width={210} height={120} />
            <h3>Join Live group classes</h3>
            <p>Attend live classes from anywhere in the world.</p>
          </FeatureCard>
        </FeaturesGrid>
      </MembershipSection>

      {isSignUpOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <button type="submit">Create Profile</button>
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

      {isLogInTrainersOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Trainers Log In</h2>
            <form onSubmit={handleLogInTrainer}>
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
            <button
              className="close-btn"
              onClick={() => setIsLogInTrainersOpen(false)}
            >
              Close
            </button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  )
}
