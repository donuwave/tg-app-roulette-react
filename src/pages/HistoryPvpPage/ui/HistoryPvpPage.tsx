import { SHistoryPvpPage, STitle } from "./historyPvpPage.styles";
import { HistoryList } from "@features/HistoryList";
import { HistoryFilter } from "@features/HistoryFilter";

const HistoryPvpPage = () => {
  return (
    <SHistoryPvpPage>
      <STitle>PVP История</STitle>
      <HistoryFilter />

      <HistoryList />
    </SHistoryPvpPage>
  );
};

export default HistoryPvpPage;
