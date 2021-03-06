import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 45%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
    margin-left: 100px;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 100px;
  margin: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background: #f7931e;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 0px;
  font-family: DM Sans;
  font-size: 14px;
  line-height: 16px;
  color: #ef4444;
`

export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  margin-right: 4px;
`

export const FoodImage = styled.img`
  height: 100vh;
  width: 45%;
  margin-left: 100px;
  @media screen and (max-width: 875px) {
    height: 60vh;
    width: 80vw;
    margin-left: 0px;
  }
`

export const LoginText = styled.h1`
  font-family: bree serif;
`
