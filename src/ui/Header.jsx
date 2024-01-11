import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
  padding: 1.2rem, 4.8rem;
  padding-left: 4.8rem;
  padding-right: 4.8rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
