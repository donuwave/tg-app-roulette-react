import { SAvatar, SInvite, SInvitePlayer, SPlayers, STitle } from "./invitePlayer.styles";

export const InvitePlayer = () => {
  return (
    <SInvitePlayer>
      <STitle>
        <span>Игроки</span>
        <SInvite>Добавить</SInvite>
      </STitle>

      <SPlayers>
        <SAvatar>
          <img src="/profile.png" alt="profile" />
        </SAvatar>
        <SAvatar>
          <img src="/profile.png" alt="profile" />
        </SAvatar>
        <SAvatar>
          <img src="/profile.png" alt="profile" />
        </SAvatar>
      </SPlayers>
    </SInvitePlayer>
  );
};
