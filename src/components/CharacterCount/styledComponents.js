import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  padding: 30px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  max-width: 80vw;
  margin: 20px;
`

export const YellowBgContainer = styled.div`
  background-color: #ffc533;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50vw;
  height: 80vh;
`
export const HeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
  min-width: 90%;
  background-size: cover;
`

export const HeadingTextBlue = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: bold;
`

export const EmptyImage = styled.img`
  height: 40vh;
  width: 30vw;
  margin-top: 5px;
`

export const BlueBgContainer = styled.div`
  background-color: #0f172a;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 40vw;
  min-height: 80vh;
`
export const HeadingYellow = styled.h1`
  color: #ffbf1f;
  font-family: 'Roboto';
  font-size: 44px;
  font-weight: bold;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding: 10px;
  min-width: 90%;
`
export const Input = styled.input`
  height: 45px;
  width: 70%;
  margin: 5px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #475569;
  outline: none;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: normal;
`
export const AddButton = styled.button`
  height: 45px;
  width: 25%;
  background-color: #ffbf1f;
  border: 0px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: normal;
`

export const InputListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 90%;
  overflow-y: auto;
  line-height: 2px;
`
