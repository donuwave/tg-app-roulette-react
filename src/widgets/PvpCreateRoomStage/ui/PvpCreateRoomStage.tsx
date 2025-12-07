import { useMemo, useState } from "react";
import {
  SChoiceList,
  SContent,
  SCreateNewRoomSubmit,
  SCreateRoom,
  STitle,
} from "./pvpCreateRoomStage.styles.ts";
import { CardButtonCreate, CreateSettingsCard } from "@entities/game";
import { InvitePlayer } from "@features/InvitePlayer";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config";

export const PvpCreateRoomStage = () => {
  const [stage, setStage] = useState<"choiceTypeRoom" | "createNewRoom" | "joinRoom">(
    "choiceTypeRoom"
  );
  const navigate = useNavigate();

  const [time, setTime] = useState(10);
  const [currency, setCurrency] = useState(10);

  const handleChangeTime = (value: number) => {
    setTime(value);
  };

  const handleChangeCurrency = (value: number) => {
    setCurrency(value);
  };

  const getTitle = useMemo(() => {
    switch (stage) {
      case "choiceTypeRoom":
        return "Комната с друзьями";
      case "createNewRoom":
        return "Создать новую комнату";
      default:
        return "Присоеденится к существующей комнате";
    }
  }, []);

  const handleCreateRoom = () => setStage("createNewRoom");
  const handleToPvp = () => navigate(routes.pvp);

  return (
    <>
      <STitle>{getTitle}</STitle>

      <SContent>
        {stage === "choiceTypeRoom" && (
          <SChoiceList>
            <CardButtonCreate
              onClick={handleCreateRoom}
              title="Создать новую комнату"
              description="Создавайте свои комнаты, настраивайте ход игры и приглашейте игроков"
            />
            <CardButtonCreate
              title="Присоединиться к комнате"
              description="Создавайте свои комнаты, настраивайте ход игры и приглашейте игроков"
            />
          </SChoiceList>
        )}

        {stage === "createNewRoom" && (
          <SCreateRoom>
            <CreateSettingsCard
              value={time}
              onChange={handleChangeTime}
              title={"Время игры"}
              maxCount={90}
              iteration="мин."
            />
            <CreateSettingsCard
              value={currency}
              onChange={handleChangeCurrency}
              title={"Макс. ставка"}
              maxCount={90}
              iteration={<img src="/star-transparent.png" />}
            />
            <InvitePlayer />

            <SCreateNewRoomSubmit onClick={handleToPvp}>Создать</SCreateNewRoomSubmit>
          </SCreateRoom>
        )}
      </SContent>
    </>
  );
};
