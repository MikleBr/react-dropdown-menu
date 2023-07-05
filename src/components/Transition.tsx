import { useEffect, useRef, useState } from 'react';

type TransitionProps = React.PropsWithChildren & {
  mount?: boolean;
  duration?: number;
  onMount?: () => void;
  onUnmount?: () => void;
  onTransitionMount?: () => void;
  onTransitionUnmount?: () => void;
};

export default function Transition({
  children,
  mount = false,
  duration = 150,
  onMount,
  onUnmount,
  onTransitionMount,
  onTransitionUnmount,
}: TransitionProps) {
  const timeoutID = useRef<number | null>(null);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (mount) {
      setTransition(false);
    } else {
      timeoutID.current = setTimeout(() => {
        setTransition(true);
      }, duration);
    }

    return () => {
      if (timeoutID.current !== null) {
        clearTimeout(timeoutID.current);
        timeoutID.current = null;
      }
    };
  }, [mount, duration]);

  useEffect(() => {
    if (mount && transition) onMount?.();
    if (!mount && transition) onUnmount?.();
    if (mount && !transition) onTransitionMount?.();
    if (!mount && !transition) onTransitionUnmount?.();
  }, [mount, transition]);

  return mount || !transition ? <>{children}</> : null;
}