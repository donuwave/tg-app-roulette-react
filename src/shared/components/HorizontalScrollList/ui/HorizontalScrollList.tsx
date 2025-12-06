import { useEffect, useRef, useState } from "react";
import { useMotionValue, useAnimationFrame } from "framer-motion";
import { type HorizontalListTypes } from "../model/horizontalScrollList.types";
import { SList, GradientLeftEdgeOverlay, Container } from "./horizontalScrollList.styles";

export const HorizontalScrollList = <T,>({
  list,
  itemContent,
  isShadow = false,
}: HorizontalListTypes<T>) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const [segmentWidth, setSegmentWidth] = useState(0);

  const pausedRef = useRef(false);
  const idleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const full = trackRef.current.scrollWidth;
      setSegmentWidth(full / 2);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [list.length]);

  const normalizeX = () => {
    if (segmentWidth <= 0) return;
    let current = x.get();

    while (current <= -segmentWidth) current += segmentWidth;
    while (current >= 0) current -= segmentWidth;

    x.set(current);
  };

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    if (segmentWidth <= 0) return;

    const speed = 40;
    const moveBy = (speed * delta) / 1000;

    let next = x.get() - moveBy;
    if (next <= -segmentWidth) {
      next += segmentWidth;
    }
    x.set(next);
  });

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    normalizeX();
    pausedRef.current = false;
  };

  const resetIdleTimer = () => {
    pause();
    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = window.setTimeout(() => {
      resume();
    }, 2000);
  };

  useEffect(() => {
    resume();

    return () => {
      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, [segmentWidth]);

  const handleUserActionStart = () => {
    resetIdleTimer();
  };

  const handleUserActionEnd = () => {
    normalizeX();
    resetIdleTimer();
  };

  return (
    <Container>
      <SList
        ref={trackRef}
        style={{ x }}
        drag="x"
        dragMomentum={false}
        dragElastic={0.05}
        onDragStart={handleUserActionStart}
        onDragEnd={handleUserActionEnd}
        onMouseDown={handleUserActionStart}
        onTouchStart={handleUserActionStart}
      >
        {list.map((data, index) => itemContent(data, index))}
        {list.map((data, index) => itemContent(data, index))}
      </SList>
      {isShadow && <GradientLeftEdgeOverlay />}
    </Container>
  );
};
