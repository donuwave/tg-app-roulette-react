import styled from "styled-components";

export const SProfileAvatars = styled.div`
  background: #040404;
  border: 1px solid #4e4e4e;
  display: grid;
  gap: 24px;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 14px;
`;

export const STitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  padding-top: 18px;
  text-align: center;
`;

export const SList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
`;
