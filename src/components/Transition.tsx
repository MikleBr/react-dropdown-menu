import { useEffect, useRef, useState } from 'react';

type TransitionProps = React.PropsWithChildren & {
  mount?: boolean;
  duration?: number;
  onMount?: () => void;
  onUnmount?: () => void;
  onTransitionMount?: () => void;
  onTransitionUnmount?: () => void;
};

function queueMacrotask(callback: () => void) {
  const messageChannel = new MessageChannel();
  messageChannel.port2.onmessage = () => {
    callback();
    messageChannel.port2.onmessage = null;
  };
  messageChannel.port1.postMessage(null);
}

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
      //! Актуально для React 18
      // setTimeout сделан для случая когда
      // рендер компонента вызван недискретным вводом (например: onMouseEnter, onScroll и т.д.)
      // эффект и рендер вызываются синхронно и анимация не работает
      // https://github.com/reactwg/react-18/discussions/128
      queueMacrotask(() => setTransition(false));
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
