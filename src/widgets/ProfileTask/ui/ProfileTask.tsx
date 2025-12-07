import {
  SActions,
  SActiveButton,
  SProfileTask,
  SProfileTasks,
  SResult,
  SResultItem,
  SResultItemActive,
  SResultItemTitle,
  SSecondaryButton,
  STitle,
  SWhiteButton,
} from "./profileTask.styles";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config";

export const ProfileTask = () => {
  const navigate = useNavigate();
  const handleToTasks = () => navigate(routes.tasks);

  return (
    <SProfileTasks>
      <SProfileTask>
        <STitle>
          Выполняй задания <br /> и получай вознаграждение
        </STitle>
        <SResult>
          <SResultItem>
            <SResultItemTitle>Выполнено:</SResultItemTitle>
            <span>0 / 19</span>
          </SResultItem>
          <SResultItemActive>
            <span>Заработано:</span>
            <span>0 TON</span>
          </SResultItemActive>
        </SResult>
        <SActiveButton onClick={handleToTasks}>Открыть задания</SActiveButton>
      </SProfileTask>

      <SProfileTask>
        <STitle>
          Приглашай друзей <br /> и получай 10% с их комиссий
        </STitle>
        <SResult>
          <SResultItem>
            <SResultItemTitle>Приглашено:</SResultItemTitle>
            <span>0 друзей</span>
          </SResultItem>
          <SResultItemActive>
            <span>Заработано:</span>
            <span>0 TON</span>
          </SResultItemActive>
        </SResult>
        <SActiveButton>Вывести TON</SActiveButton>
        <SActions>
          <SSecondaryButton>Скопировать</SSecondaryButton>
          <SWhiteButton>Пригласить</SWhiteButton>
        </SActions>
      </SProfileTask>
    </SProfileTasks>
  );
};
