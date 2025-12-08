export interface IAvatarPick {
  id: string;
  name: string;
  src: string;
  active: boolean;
  onClick: (id: string) => void;
}
