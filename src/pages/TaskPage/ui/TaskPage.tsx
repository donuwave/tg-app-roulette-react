import {
  SAction,
  SCard,
  SCheck,
  SDescription,
  SList,
  SStart,
  STag,
  STaskPage,
  STitle,
  STitleCard,
} from "./taskPage.styles";

const TaskPage = () => {
  return (
    <STaskPage>
      <STitle>Задания</STitle>

      <SList>
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <SCard key={card}>
            <STitleCard>
              <img src="/task.png" alt="" />
              <STag>Награда: +10 TON</STag>
            </STitleCard>
            <SDescription>Присоединяйся сейчас и получай то и то и другие штуки</SDescription>
            <SAction>
              <SStart>Начать</SStart>
              <SCheck>Проверить</SCheck>
            </SAction>
          </SCard>
        ))}
      </SList>
    </STaskPage>
  );
};

export default TaskPage;
