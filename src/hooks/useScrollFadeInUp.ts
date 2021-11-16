import { useCallback, useEffect, useRef } from "react";
import "intersection-observer";

const useScrollFadeInUp = (delay?: number) => {
  const dom = useRef<HTMLDivElement>(null);

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
      transform: "translate3d(0, 20%, 0)",
    },
  };
};

export default useScrollFadeInUp;
