import { SActions, SHead, SProfilePage, STitle } from "./profilePage.styles";
import { ProfileInfo } from "@features/ProfileInfo";
import { HeaderPortal } from "@widgets/Header";
import { ProfileBalance } from "@widgets/ProfileBalance";
import { useState } from "react";
import { ProfileSegmented } from "@entities/user";
import { ProfileTask } from "@widgets/ProfileTask";
import { CurrentListAvatars } from "@features/CurrentListAvatars";
import { AvatarShoppingList } from "@widgets/AvatarShoppingList";

type IProfileSegmented = "profile" | "avatar";

const ProfilePage = () => {
  const [chapter, setChapter] = useState<IProfileSegmented>("profile");

  const handleChapter = (v: unknown) => setChapter(v as IProfileSegmented);

  return (
    <SProfilePage>
      <HeaderPortal>
        <SHead>
          <STitle>Профиль</STitle>
          <ProfileInfo />
          <ProfileBalance />
          <ProfileSegmented value={chapter} handleChange={handleChapter} />
        </SHead>
      </HeaderPortal>
      {chapter === "profile" && <ProfileTask />}
      {chapter === "avatar" && (
        <SActions>
          <CurrentListAvatars />
          <AvatarShoppingList />
        </SActions>
      )}
    </SProfilePage>
  );
};

export default ProfilePage;
