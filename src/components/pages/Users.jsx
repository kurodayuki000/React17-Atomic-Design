import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard.jsx"

const users = [...Array(10).keys()].map(((val) => {
  return {
      id: val,
      name: `じゃけぇ${val}`,
      image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      email: "12345@exmple.com",
      phone: "090-1111-2222",
      company: {
        name: "テスト株式会社"
      },
      website: "https://google.com"
  }
}))

export const Users = () => {
  return(
    <SContaicner>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/ >
        ))}
      </SUserArea>
    </SContaicner>
  )
}

const SContaicner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px;
`