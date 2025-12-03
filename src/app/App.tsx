import { WithProviders } from "@app/providers";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { GlobalStyles } from "@shared/config";
import { Router } from "@app/router";
import { Suspense } from "react";

export const App = () => {
  return (
    <WithProviders>
      <GlobalStyles />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Router />
      </Suspense>
    </WithProviders>
  );
};
