import styled from 'styled-components'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`

const MemberInfo = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-size: 1rem;
  }

  td {
    font-size: 0.9rem;

    select,
    input {
      width: 80%;
      padding: 5px;
      font-size: 0.9rem;
      text-align: center;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .clearButton {
    background-color: #f44336;
    color: #fff;

    &:hover {
      background-color: #d32f2f;
    }
  }

  .saveButton {
    background-color: #1976d2;
    color: #fff;

    &:hover {
      background-color: #115293;
    }
  }
`

const DisabledDiv = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  color: #999;
  pointer-events: none;
  margin-top: 20px;
`

export {
  ButtonContainer,
  DisabledDiv,
  MemberInfo,
  PageContainer,
  SectionTitle,
  Table,
}
