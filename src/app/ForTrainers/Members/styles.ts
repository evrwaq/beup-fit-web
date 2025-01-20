import styled from 'styled-components'

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

export {
  MainContent,
  MemberCard,
  MembersGrid,
  PageContainer,
  SectionTitle,
  Sidebar,
}
