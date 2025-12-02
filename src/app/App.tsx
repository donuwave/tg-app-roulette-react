import { WithProviders } from "@app/providers";
import { GamePvpPage } from "@pages/GamePvpPage";
import { Layout } from "@shared/components";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { GlobalStyles } from "@shared/config";

export const App = () => {
  return (
    <WithProviders>
      <GlobalStyles />
      <Layout>
        <GamePvpPage />
      </Layout>
    </WithProviders>
  );
};
