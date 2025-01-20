import styled from 'styled-components'

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

export const HeroSection = styled.section`
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

export const HeroContent = styled.div`
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

  .personal-span {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    color: #555;
    cursor: pointer;
  }

  .personal-span:visited {
    color: none;
  }
`

export const SignUp = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #000000;
  background-color: #dfdfdf;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #115293;
    border: none;
    color: #fff;
  }
`

export const LogIn = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #1d81e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #115293;
  }
`

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

export const MembershipSection = styled.section`
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`

export const FeaturesGrid = styled.div`
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

export const FeatureCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 8px;
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

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div`
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
