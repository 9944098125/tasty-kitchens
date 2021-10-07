import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  padding-left: 60px;
  padding-right: 60px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: #f8fafc;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0.38%;
  bottom: 81.51%;
  @media screen and (max-width: 875px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  @media screen and (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentListItem = styled.li`
  /* Headline/05 */
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  letter-spacing: -0.355556px;
  color: #f7931e;
  cursor: pointer;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  position: static;
  left: 5%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #f7931e;
  border-radius: 8px;
  border: 0px none;
  color: #ffffff;
  font-family: DM Sans;
  margin-left: 10px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const WebsiteLogo = styled.img`
  @media screen and (min-width: 768px) {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin: 10px;
    background-color: transparent;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const NavHeaderMobile = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 875px) {
    display: none;
  }
`
export const WebLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
`
export const WebLogo = styled.img`
  height: 20px;
  width: 20px;
`
export const WebName = styled.img`
  height: 20px;
  width: 70px;
  margin-left: 15px;
  margin-right: 100px;
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 50px;
  width: 130%;
  padding: 20px;
  @media screen and (max-width: 875px) {
    flex-direction: column;
    align-items: center;
    height: 120%;
    width: 60px;
  }
`
export const Links = styled.p`
  font-size: 15px;
  color: #ffffff;
  margin-right: 15px;
`
export const ButtonBar = styled.button`
  height: 15px;
  width: 15px;
  margin: 15px;
`
