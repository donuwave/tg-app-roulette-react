import { SHead, SProfilePage, STitle } from "./profilePage.styles";
import { ProfileInfo } from "@features/ProfileInfo";
import { HeaderPortal } from "@widgets/Header";
import { ProfileBalance } from "@widgets/ProfileBalance";
import { useState } from "react";
import { ProfileSegmented } from "@entities/user";
import { ProfileAvatars } from "@widgets/ProfileAvatars";
import { ProfileTask } from "@widgets/ProfileTask";

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
      {chapter === "avatar" && <ProfileAvatars />}
    </SProfilePage>
  );
};

export default ProfilePage;
