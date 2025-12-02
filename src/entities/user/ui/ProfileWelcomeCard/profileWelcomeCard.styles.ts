import styled from "styled-components";

export const SProfileWelcomeCard = styled.div`
  display: grid;
  align-items: center;
  gap: 4px;
  grid-template-columns: 23px 1fr;
  background: #3c3f46;
  padding: 5px;
  border-radius: 14px;
`;

export const SWelcome = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 7px;
`;

export const SInfo = styled.div`
  display: grid;
`;

export const SName = styled.span`
  font-size: 9px;
`;
