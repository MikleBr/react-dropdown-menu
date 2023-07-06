import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import Transition from '../Transition';

import styles from './DropdownMenu.module.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type DropdownMenuDefaultPosition = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

type DropdownMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  triggerRef: React.RefObject<HTMLElement>;
  transitionDuration?: number;
  offset?: number;
  defaultPosition?: DropdownMenuDefaultPosition;
  onClose?: () => void;
};

export default function DropdownMenu({
  open,
  triggerRef,
  transitionDuration = 150,
  offset = 0,
  defaultPosition = {
    horizontal: 'right',
    vertical: 'bottom',
  },
  onClose,
  className = '',
  children,
  style,
  ...props
}: DropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [transition, setTransition] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  useIntersectionObserver(triggerRef, {
    onNonIntersecting: onClose,
  });

  useEffect(() => {
    const handleClick = ({ clientX, clientY }: MouseEvent) => {
      if (menuRef.current !== null) {
        const { top, left, width, height } =
          menuRef.current.getBoundingClientRect();

        const isEnterPlate =
          clientX > left &&
          clientX < left + width &&
          clientY > top &&
          clientY < top + height;

        if (transition && !isEnterPlate) {
          onClose?.();
        }
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [onClose, transition]);

  useEffect(() => {
    let animationFrame: number | null = null;

    if (transition) {
      const animate = () => {
        if (triggerRef.current !== null && menuRef.current !== null) {
          const { bottom, left, right, top } =
            triggerRef.current.getBoundingClientRect();

          let horizontalPosition = defaultPosition.horizontal;
          let verticalPosition = defaultPosition.vertical;

          if (right < menuRef.current.clientWidth) {
            horizontalPosition = 'left';
          } else if (
            document.body.clientWidth - left <
            menuRef.current.clientWidth
          ) {
            horizontalPosition = 'right';
          } else {
            horizontalPosition = defaultPosition.horizontal;
          }

          if (top - offset - menuRef.current.clientHeight < 0) {
            verticalPosition = 'bottom';
          } else if (
            bottom + offset + menuRef.current.clientHeight >
            window.innerHeight
          ) {
            verticalPosition = 'top';
          } else {
            verticalPosition = defaultPosition.vertical;
          }

          let transformOriginVertical = 0;
          let transformOriginHorizontal = 0;

          if (verticalPosition === 'bottom') {
            menuRef.current.style.top = `${window.scrollY + bottom + offset}px`;
            menuRef.current.style.bottom = 'auto';
            transformOriginVertical = 0;
          }
          if (verticalPosition === 'top') {
            menuRef.current.style.top = `${
              window.scrollY + top - menuRef.current.clientHeight - offset
            }px`;
            menuRef.current.style.bottom = 'auto';
            transformOriginVertical = 100;
          }

          if (horizontalPosition === 'left') {
            menuRef.current.style.left = `${left}px`;
            menuRef.current.style.right = 'auto';
            transformOriginHorizontal = 0;
          }

          if (horizontalPosition === 'right') {
            menuRef.current.style.left = 'auto';
            menuRef.current.style.right = `${
              window.document.body.clientWidth - right
            }px`;
            transformOriginHorizontal = 100;
          }

          menuRef.current.style.transformOrigin = `${transformOriginHorizontal}% ${transformOriginVertical}%`;
        }

        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [transition, defaultPosition, offset, triggerRef]);

  const plate = (
    <Transition
      duration={transitionDuration}
      mount={open}
      onTransitionMount={() => setTransition(true)}
      onTransitionUnmount={() => setTransition(false)}
    >
      <div
        ref={menuRef}
        style={{ transitionDuration: `${transitionDuration}ms`, ...style }}
        className={`${className} ${styles.plate} ${
          transition ? '' : styles['plate-transition-end']
        }`}
        {...props}
      >
        {children}
      </div>
    </Transition>
  );

  return portalContainer && ReactDOM.createPortal(plate, portalContainer);
}
