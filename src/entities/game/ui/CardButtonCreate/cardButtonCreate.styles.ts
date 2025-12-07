import styled from "styled-components";

export const SCard = styled.div`
  display: grid;
  gap: 8px;
  background: #131313;
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.active.main};
  }
`;

export const SCardTitle = styled.div`
  font-size: 15px;
`;

export const SCardContent = styled.div`
  color: #898989;
  max-width: 240px;
  font-size: 11px;
`;
