import { SCount, SIdentifier, SList, SLotsHeader, SLotsList } from "./lotsList.styles";
import { ParticipantCard } from "@entities/game";

export const LotsList = () => {
  return (
    <SLotsList>
      <SLotsHeader>
        <SCount>Игроков (3)</SCount>
        <SIdentifier>#234235</SIdentifier>
      </SLotsHeader>

      <SList>
        {[1, 2, 3].map((el) => (
          <ParticipantCard key={el} />
        ))}
      </SList>
    </SLotsList>
  );
};
