import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { PrimaryButton } from "../atoms/button/Primary-Button"

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () => 
    history.push({pathname: "/users", state: {isAdmin: true}});

  const onClickGeneral = () => 
    history.push({pathname: "/users", state: {isAdmin: false}});

  return(
    <SContaicner>
      <h2>TOPページです</h2>
      <PrimaryButton onClick={onClickAdmin}>
        管理者ユーザー
      </PrimaryButton>
      <br />
      <br />
      <PrimaryButton onClick={onClickGeneral}>
        一般ユーザー
      </PrimaryButton>
    </SContaicner>
  )
}

const SContaicner = styled.div`
  text-align: center;
`