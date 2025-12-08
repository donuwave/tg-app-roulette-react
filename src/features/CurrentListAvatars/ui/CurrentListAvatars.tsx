import { SList, SProfileAvatars, STitle } from "./currentListAvatars.styles";
import { useState } from "react";
import { AvatarPick } from "@entities/user";

const avatars = [
  {
    id: "1",
    name: "Avatar",
    src: "/avatar.png",
  },
  {
    id: "2",
    name: "Avatar",
    src: "/avatar.png",
  },
  {
    id: "3",
    name: "Avatar",
    src: "/avatar.png",
  },
];

export const CurrentListAvatars = () => {
  const [choiceAvatars, setChoiceAvatars] = useState<{ id: string; name: string; src: string }>(
    avatars[0]
  );

  const handleChange = (id: string) => {
    const find = avatars.find((el) => el.id === id);
    if (find) setChoiceAvatars(find);
  };

  return (
    <div>
      <SProfileAvatars>
        <STitle>Ваш аватар</STitle>
        <img src="/avatar-main.png" alt="" />
      </SProfileAvatars>

      <SList>
        {avatars.map((avatar) => {
          const isChoiceAvatar = choiceAvatars.id === avatar.id;

          return (
            <AvatarPick
              key={avatar.id}
              active={isChoiceAvatar}
              onClick={handleChange}
              {...avatar}
            />
          );
        })}
      </SList>
    </div>
  );
};
