import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Linked = styled(Link)``

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 20px;
  width: 400px;
  max-width: 500px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 875px) {
    width: 90vw;
    margin: 0px;
  }
`
export const Image = styled.img`
  height: 160px;
  width: 180px;
  margin-right: 10px;
  border-radius: 15px;
  @media screen and (max-width: 875px) {
    width: 150px;
    height: 125px;
    margin-bottom: 10px;
  }
`
export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RName = styled.h1`
  font-weight: 700;
  font-size: 25px;
  color: black;
  font-family: 'Lobster';
  @media screen and (max-width: 875px) {
    font-size: 10px;
    font-weight: 400;
  }
`
export const Cuisine = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: black;
`
export const RatingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const RatingNum = styled.p`
  font-weight: 400;
  font-size: 10px;
  margin-left: 20px;
  color: black;
`
