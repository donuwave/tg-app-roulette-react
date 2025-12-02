import { SActions, SGamePvpHeader, SGamePvpPage, SSettings } from "./gamePvpPage.styles";
import { PlayerWheel } from "@widgets/GameWheel";
import { Button } from "antd";
import { ProfileWelcomeCard } from "@entities/user";
import { Balance, LastWinCard } from "@entities/game";
import { HorizontalScrollList } from "@shared/components";

export const GamePvpPage = () => {
  const players = [
    { image: "/profile.png", color: "#16c6cc", index: 0 },
    { image: "/profile.png", color: "#4136d9", index: 1 },
    { image: "/profile.png", color: "#d53a30", index: 2 },
    { image: "/profile.png", color: "#741589", index: 3 },
  ];

  return (
    <SGamePvpPage>
      <SGamePvpHeader>
        <ProfileWelcomeCard />
        <HorizontalScrollList
          list={[1, 2, 3, 4, 5, 6]}
          itemContent={(item) => <LastWinCard key={item} />}
          loading={false}
        />
      </SGamePvpHeader>

      <SSettings>
        <Balance />
        <div>Переключалка</div>
        <div>Кнопочки</div>
      </SSettings>

      <PlayerWheel players={players} onWinner={(winner) => console.log(winner)} />
      <SActions>
        <Button>Добавить в PVP</Button>
        <Button>1.33 TON</Button>
      </SActions>
    </SGamePvpPage>
  );
};
