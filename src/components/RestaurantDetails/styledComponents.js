import styled from 'styled-components'

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url('https://res.cloudinary.com/dqnh9af86/image/upload/v1632910928/Rectangle_1399_khfght.png');
  background-size: cover;
  width: 100vw;
  height: 450px;
  padding: 20px;
  @media screen and (max-width: 875px) {
    height: 350px;
  }
`

export const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  @media screen and (max-width: 875px) {
    margin-left: 20px;
  }
`
