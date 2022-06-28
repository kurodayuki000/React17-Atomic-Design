import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children, onClick } = props;
  return <Sbutton onClick={onClick}>{children}</Sbutton>
}

const Sbutton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`