import styled from 'styled-components'

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`

export const Header = styled.header`
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

export const ProfileSection = styled.section`
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

export const Tabs = styled.div`
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

export const ProgressSection = styled.section`
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
