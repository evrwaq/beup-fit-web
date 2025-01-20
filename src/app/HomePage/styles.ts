import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`

export const Sidebar = styled.aside`
  width: 240px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  nav {
    margin-top: 20px;

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      text-decoration: none;
      color: #555;
      font-weight: 500;

      &:hover {
        background-color: #f0f0f0;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`

export const MainContent = styled.main`
  flex: 1;
  padding: 40px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 1.75rem;
  }

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
`

export const PlanSection = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .plan-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .plan-item {
      flex: 1;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      button {
        padding: 5px 10px;
        font-size: 0.875rem;
        background-color: #1976d2;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #115293;
        }
      }
    }

    .image {
      border-radius: 24px;
    }
  }
`

export const ProgressSection = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 8px;
    height: 10px;
    margin-bottom: 10px;
    overflow: hidden;

    .progress {
      height: 100%;
      width: 40%; /* Valor atual do progresso */
      background-color: #1976d2;
    }
  }

  p {
    font-size: 0.875rem;
    color: #555;
  }
`

export const AchievementsSection = styled.section`
  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .achievement-list {
    display: flex;
    flex-direction: column;

    .achievement-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      span {
        font-size: 0.875rem;
        color: #555;
      }
    }
  }
`
