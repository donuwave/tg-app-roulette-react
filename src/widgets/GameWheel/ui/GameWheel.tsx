import { type FC, useState } from "react";
import type { IPlayerWheel } from "../model/playerWheel.types";
import {
  WheelWrapper,
  WheelContainer,
  WheelSvg,
  Avatar,
  CenterCircle,
  Pointer,
} from "./gameWheel.styles";

export const PlayerWheel: FC<IPlayerWheel> = ({ players, onWinner }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const sectorAngle = 360 / players.length;

  const getWinner = (finalRotation: number) => {
    const sectorAngle = 360 / players.length;
    const normalized = ((finalRotation % 360) + 360) % 360;
    const POINTER_ANGLE = 270;
    const angleUnderPointer = (POINTER_ANGLE - normalized + 360) % 360;
    const sectorIndex = Math.floor(((angleUnderPointer - 90 + 360) % 360) / sectorAngle);
    return players[sectorIndex];
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const extraRotation = 360 * 5 + Math.floor(Math.random() * 360);
    const final = rotation + extraRotation;

    setRotation(final);

    setTimeout(() => {
      setSpinning(false);
      const winner = getWinner(final);
      onWinner?.(winner);
    }, 4000);
  };

  return (
    <WheelWrapper>
      <Pointer />

      <WheelContainer style={{ transform: `rotate(${rotation}deg)` }}>
        <WheelSvg viewBox="0 0 100 100">
          {players.map((p, i) => {
            const start = (i * sectorAngle + 90) % 360;
            const end = ((i + 1) * sectorAngle + 90) % 360;

            const x1 = 50 + 50 * Math.cos((Math.PI / 180) * start);
            const y1 = 50 + 50 * Math.sin((Math.PI / 180) * start);
            const x2 = 50 + 50 * Math.cos((Math.PI / 180) * end);
            const y2 = 50 + 50 * Math.sin((Math.PI / 180) * end);

            return (
              <path key={i} d={`M50 50 L${x1} ${y1} A50 50 0 0 1 ${x2} ${y2} Z`} fill={p.color} />
            );
          })}
        </WheelSvg>

        {players.map((p, i) => {
          const angle = i * sectorAngle + sectorAngle / 2 + 90;
          const radians = (angle * Math.PI) / 180;

          const radius = 130;
          const centerX = 175;
          const centerY = 175;

          const x = centerX + radius * Math.cos(radians) - 27.5;
          const y = centerY + radius * Math.sin(radians) - 27.5;

          return (
            <Avatar
              key={p.index}
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              <img src={p.image} alt="" />
            </Avatar>
          );
        })}
      </WheelContainer>

      <CenterCircle onClick={spin}>Крутить</CenterCircle>
    </WheelWrapper>
  );
};
