import { useCallback, useEffect, useRef } from "react";
import "intersection-observer";

type Direction = "right" | "left" | "up" | "down";

interface ScrollFadeInParam {
  delay?: number;
  direction: Direction;
}

const useScrollFadeIn = (param: ScrollFadeInParam) => {
  const dom = useRef<HTMLDivElement>(null);
  const delay = param?.delay ?? 0;
  const transform =
    param?.direction === "up"
      ? "translate3d(0, 20%, 0)"
      : param?.direction === "down"
      ? "translate3d(0, -20%, 0)"
      : param?.direction === "right"
      ? "translate3d(-10%, 0, 0)"
      : "translate3d(10%, 0, 0)";

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (current && entry.isIntersecting) {
        setTimeout(() => {
          current.style.transitionProperty = "opacity transform";
          current.style.transitionDuration = "1s";
          current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
          current.style.transitionDelay = "0s";
          current.style.opacity = "1";
          current.style.transform = "translate3d(0, 0, 0)";
        }, delay);
      }
    },
    [delay],
  );

  useEffect(() => {
    const { current } = dom;

    if (current) {
      const observer = new IntersectionObserver(handleScroll, {
        threshold: 0.7,
      });

      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform,
    },
  };
};

export default useScrollFadeIn;
