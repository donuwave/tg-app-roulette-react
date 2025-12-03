import { SActions, SHeader } from "./header.styles";
import { CloseIcon, LogoIcon, SettingIcon } from "@shared/assets";
import { Button } from "antd";

export const Header = () => {
  return (
    <SHeader>
      <LogoIcon />
      <SActions>
        <Button type="text" icon={<SettingIcon />} />
        <Button type="text" icon={<CloseIcon />} />
      </SActions>
    </SHeader>
  );
};
