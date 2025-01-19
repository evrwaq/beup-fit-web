import styled from 'styled-components'

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    text-align: left;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
    }

    a:visited {
      color: none;
    }
  }
`

export const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`

export const WorkoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  td {
    font-size: 0.9rem;
  }
`

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ProgressCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  .progress-bar-container {
    background-color: #e0e0e0;
    border-radius: 8px;
    height: 20px;
    overflow: hidden;
    margin-top: 10px;

    .progress-bar {
      height: 100%;
      width: 90%;
      background-color: #1976d2;
    }
  }
`

export const InputContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
`
