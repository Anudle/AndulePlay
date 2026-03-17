import { useState, useRef } from 'react';

interface Options {
  /** Number of items to advance per step */
  step: number;
  /** Total number of items in the list */
  total: number;
  /**
   * When true, clamps the scroll target so the last page never shows empty
   * space on the right (used by FeaturedHero where cards are wider).
   */
  clamp?: boolean;
}

export function useScrollCarousel({ step, total, clamp = false }: Options) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + step < total;

  function cardSlotWidth(): number {
    const el = scrollRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth : 0;
  }

  function getScrollTarget(index: number): number {
    const raw = cardSlotWidth() * index;
    if (!clamp) return raw;
    const el = scrollRef.current;
    if (!el) return raw;
    return Math.min(raw, el.scrollWidth - el.clientWidth);
  }

  function animateTo(scrollLeft: number, onDone: () => void) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    if ('onscrollend' in el) {
      el.addEventListener('scrollend', onDone, { once: true });
    } else {
      setTimeout(onDone, 420);
    }
  }

  function handleNext() {
    if (isAnimating || !canGoNext) return;
    setIsAnimating(true);
    const next = currentIndex + step;
    animateTo(getScrollTarget(next), () => {
      setCurrentIndex(next);
      setIsAnimating(false);
    });
  }

  function handlePrev() {
    if (isAnimating || !canGoPrev) return;
    setIsAnimating(true);
    const prev = currentIndex - step;
    animateTo(getScrollTarget(prev), () => {
      setCurrentIndex(prev);
      setIsAnimating(false);
    });
  }

  return { scrollRef, currentIndex, isAnimating, canGoPrev, canGoNext, handleNext, handlePrev };
}
