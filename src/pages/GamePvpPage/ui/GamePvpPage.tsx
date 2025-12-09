import {
  SActions,
  SAddWallet,
  SButton,
  SButtonSecondary,
  SGamePvpHeader,
  SGamePvpPage,
  SHeaderActions,
  SSegmented,
  SSettings,
} from "./gamePvpPage.styles";
import { PlayerWheel } from "@widgets/GameWheel";
import { ProfileWelcomeCard } from "@entities/user";
import { LastWinCard, RollCard } from "@entities/game";
import { HorizontalScrollList } from "@shared/components";
import { MessageIcon, RepeatTime } from "@shared/assets";
import { LotsList } from "@features/LotsList";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config";
import { AddingGifts } from "@widgets/AddingGifts";
import { AddingBalance } from "@widgets/AddingBalance";
import { useOpenGiftFromLot } from "@shared/hooks";
import { GiftBottomSheet } from "@entities/gift";

//TODO: На этой странице я буду получать данные с бэка по текущей PVP комнате
const GamePvpPage = () => {
  const navigate = useNavigate();
  const players = [
    { image: "/profile.png", color: "#16c6cc", index: 0 },
    { image: "/profile.png", color: "#4136d9", index: 1 },
    { image: "/profile.png", color: "#d53a30", index: 2 },
    { image: "/profile.png", color: "#741589", index: 3 },
  ];
  const handleToHistory = () => {
    navigate(routes.pvpHistory);
  };

  const {
    handleOpenGift,
    handleOpenRollCard,
    handleCloseRollCard,
    isOpenGift,
    handleCloseGift,
    isOpenLot,
  } = useOpenGiftFromLot();

  const handleWinner = (winner: unknown) => {
    handleOpenRollCard(winner);
    console.log(winner);
  };

  return (
    <>
      <RollCard open={isOpenLot} onClickPresent={handleOpenGift} onClose={handleCloseRollCard} />
      <GiftBottomSheet open={isOpenGift} onClose={handleCloseGift} />

      <SGamePvpPage>
        <SGamePvpHeader>
          <ProfileWelcomeCard />
          <HorizontalScrollList
            isShadow
            list={[1, 2, 3, 4, 5, 6]}
            itemContent={(item) => <LastWinCard key={item} />}
            loading={false}
          />
        </SGamePvpHeader>

        <SSettings>
          <AddingBalance />
          <SSegmented
            options={[
              { label: "1 гифт", value: "gift" },
              { label: "1.33 TON", value: "ton" },
            ]}
          />
          <SHeaderActions>
            <SButton onClick={handleToHistory} icon={<RepeatTime />} />
            <SButtonSecondary icon={<MessageIcon />} />
          </SHeaderActions>
        </SSettings>

        <PlayerWheel players={players} onWinner={handleWinner} />
        <SActions>
          <AddingGifts />
          <SAddWallet icon={<img src="/present.png" alt="present" />}>1.33 TON</SAddWallet>
        </SActions>

        <LotsList />
      </SGamePvpPage>
    </>
  );
};

export default GamePvpPage;
