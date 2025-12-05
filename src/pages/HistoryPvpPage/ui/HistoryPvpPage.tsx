import { SHistoryPvpPage, STitle } from "./historyPvpPage.styles";
import { HistoryList } from "@features/HistoryList";
import { HistoryFilter } from "@features/HistoryFilter";
import { HeaderPortal } from "@widgets/Header";

const HistoryPvpPage = () => {
  return (
    <SHistoryPvpPage>
      <HeaderPortal>
        <STitle>PVP История</STitle>
        <HistoryFilter />
      </HeaderPortal>

      <HistoryList />
    </SHistoryPvpPage>
  );
};

export default HistoryPvpPage;
