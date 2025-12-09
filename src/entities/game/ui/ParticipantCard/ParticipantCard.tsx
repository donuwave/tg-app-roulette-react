import {
  SAvatar,
  SCard,
  SHead,
  SHeadMain,
  SImg,
  SInvestment,
  SList,
  SParticipantCard,
  SPercent,
  SPrice,
} from "./participantCard.styles";

export const ParticipantCard = () => {
  return (
    <SParticipantCard>
      <SHeadMain>
        <SHead>
          <SAvatar>
            <img src="/profile.png" alt="" />
          </SAvatar>

          <span>@example</span>
        </SHead>

        <SInvestment>
          <SPrice>45.244 TON</SPrice>
          <SPercent>0.82%</SPercent>
        </SInvestment>
      </SHeadMain>

      <SList>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
        <SCard>
          <SImg src="/present.png" />
        </SCard>
      </SList>
    </SParticipantCard>
  );
};
