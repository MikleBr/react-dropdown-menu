import { useEffect } from 'react';

type UseIntersectionObserverParams = {
  /**
   * Функция, вызываема при пересечении
   */
  onIntersecting?: () => void;
  /**
   * Функция, вызываема при выходе из пересечения
   */
  onNonIntersecting?: () => void;
};

/**
 * Добавляет IntersectionObserver для элемента ref
 * @param ref - ref элемента, за которым будет наблюдать IntersectionObserver
 * @param params - параметры функций
 */
export default function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  { onIntersecting, onNonIntersecting }: UseIntersectionObserverParams
) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersecting?.();
        } else {
          onNonIntersecting?.();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersecting, onNonIntersecting, ref]);
}
