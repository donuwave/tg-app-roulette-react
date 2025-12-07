import {
  SActions,
  SApproveAction,
  SAvatar,
  SButtonStill,
  SChangedName,
  SCloseAction,
  SContentPopover,
  SInput,
  SName,
  SPopover,
  SProfileInfo,
  SProfileName,
} from "./profileInfo.styles";
import { CheckmarkIcon, CloseIcon, StillIcon } from "@shared/assets";
import { useEffect, useRef, useState } from "react";
import { type InputRef } from "antd";
//TODO: можно сделаь виджетом
//TODO: изменение ника катит на фичу с бэком

export const ProfileInfo = () => {
  const [name, setName] = useState("@timofeydemenev");
  const [changedName, setChangedName] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [isProfileSettings, setIsProfileSettings] = useState(false);
  const inputRef = useRef<InputRef>(null);

  const handleOpenChange = (open: boolean) => {
    setIsProfileSettings(open);
  };

  const handleChangedName = () => {
    setIsChanged((prev) => !prev);
    handleOpenChange(false);
    setChangedName(name);
  };

  const handleApproveName = () => {
    setName(changedName);
    setIsChanged(false);
  };

  const handleNoApproveName = () => {
    handleOpenChange(false);
    setIsChanged(false);
  };

  const items: { key: string; label: string; action: () => void }[] = [
    {
      key: "1",
      label: "Изменить никнейм",
      action: handleChangedName,
    },
  ];

  useEffect(() => {
    if (isChanged) inputRef.current?.focus();
  }, [isChanged]);

  return (
    <SProfileInfo>
      <SProfileName>
        <SAvatar>
          <img src="/profile.png" />
        </SAvatar>
        {!isChanged && <SName>{name}</SName>}
        {isChanged && (
          <SChangedName>
            <SInput
              ref={inputRef}
              value={changedName}
              onChange={(e) => setChangedName(e.target.value)}
            />
            <SActions>
              <SCloseAction onClick={handleNoApproveName} icon={<CloseIcon opacity={1} />} />
              <SApproveAction onClick={handleApproveName} icon={<CheckmarkIcon />} />
            </SActions>
          </SChangedName>
        )}
      </SProfileName>

      {!isChanged && (
        <SPopover
          placement="leftTop"
          trigger="click"
          open={isProfileSettings}
          onOpenChange={handleOpenChange}
          content={
            <SContentPopover>
              {items.map((el) => (
                <div key={el.key} onClick={el.action}>
                  {el.label}
                </div>
              ))}
            </SContentPopover>
          }
        >
          <SButtonStill type="text" icon={<StillIcon />} />
        </SPopover>
      )}
    </SProfileInfo>
  );
};
