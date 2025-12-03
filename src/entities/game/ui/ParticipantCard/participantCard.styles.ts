import styled from "styled-components";

export const SParticipantCard = styled.div`
  background: #131313;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
  display: grid;

  &:active,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.active.main};
  }
`;

export const SAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SHeadMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const SHead = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 30px max-content;
`;

export const SPrice = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

export const SInvestment = styled.div`
  display: grid;
  justify-items: end;
  gap: 5px;
`;

export const SPercent = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SCard = styled.div`
  width: 25px;
  height: 26px;
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
`;
