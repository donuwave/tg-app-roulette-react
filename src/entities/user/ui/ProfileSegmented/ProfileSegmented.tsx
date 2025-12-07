import { SSegmented } from "./profileSegmented.styles.ts";
import { type FC } from "react";

type IProfileSegmented = "profile" | "avatar";

interface IProfileSegmentedProps {
  value: string;
  handleChange: (value: unknown) => void;
}

export const ProfileSegmented: FC<IProfileSegmentedProps> = ({ handleChange, value }) => {
  return (
    <SSegmented<IProfileSegmented>
      value={value}
      onChange={handleChange}
      options={[
        { label: "Профиль", value: "profile" },
        { label: "Аватар", value: "avatar" },
      ]}
    />
  );
};
