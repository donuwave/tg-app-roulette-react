import { type HorizontalListTypes } from "../model/horizontalScrollList.types";
import { SList, GradientLeftEdgeOverlay, Container } from "./horizontalScrollList.styles";

export const HorizontalScrollList = <T,>({ list, itemContent }: HorizontalListTypes<T>) => {
  return (
    <Container>
      <SList>{list.map((data, index) => itemContent(data, index))}</SList>
      <GradientLeftEdgeOverlay />
    </Container>
  );
};
