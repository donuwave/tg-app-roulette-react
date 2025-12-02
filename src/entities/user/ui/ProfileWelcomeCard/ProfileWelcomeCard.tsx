import { SInfo, SName, SProfileWelcomeCard, SWelcome } from "./profileWelcomeCard.styles";

export const ProfileWelcomeCard = () => {
  return (
    <SProfileWelcomeCard>
      <img src="/profile.png" alt="profile.png" />
      <SInfo>
        <SWelcome>Добро пожаловать</SWelcome>
        <SName>Robert S. Flores</SName>
      </SInfo>
    </SProfileWelcomeCard>
  );
};
