import styled from "styled-components";

export const SGiftInfo = styled.div`
  display: grid;
`;

export const SImg = styled.img`
  justify-self: center;
`;

export const SContent = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 26px;
`;

export const SHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const STitle = styled.h4``;

export const SPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const STable = styled.div`
  background: #333234;
  padding: 15px 18px 0 18px;
  border-radius: 11px;
  color: white;
  font-size: 11px;

  div:first-child {
    padding-top: 0;
  }

  div:last-child {
    border-bottom: 0;
  }
`;

export const SRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
`;

export const SLabel = styled.span``;

export const SInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const SName = styled.span`
  font-weight: 700;
`;

export const SPercent = styled.span`
  color: #00b2bc;
`;

export const SHash = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;
