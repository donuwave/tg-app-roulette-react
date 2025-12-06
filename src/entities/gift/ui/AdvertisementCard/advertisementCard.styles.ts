import styled from "styled-components";

export const SAdvertisementCard = styled.div`
  background: #e2790c;
  min-width: 185px;
  font-size: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.background.primary};
  padding: 5px 13px;
  border-radius: 16px;
`;
