interface IPlayer {
  index: number;
  image: string;
  color: string;
}

export interface IPlayerWheel {
  players: IPlayer[];
  onWinner: (winner: IPlayer) => void;
}
