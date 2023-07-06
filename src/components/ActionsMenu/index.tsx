import { useRef, useMemo, useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import Item from './Item';
import { ActionsMenuContext } from './context';

type Props = React.PropsWithChildren & {
  className?: string;
  button: React.ReactNode;
  offset?: number;
  defaultPosition?: {
    horizontal: 'right' | 'left';
    vertical: 'bottom' | 'top';
  };
};

export default function ActionsMenu({
  children,
  className = '',
  defaultPosition,
  offset = 10,
  button,
}: Props) {
  const buttonRef = useRef(null);

  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen]
  );

  return (
    <ActionsMenuContext.Provider value={value}>
      <button
        className={`${className} active:scale-95 transition-all color-black bg-[#D3D3D3] rounded-[4px] flex items-center justify-center`}
        onClick={() => setOpen(prev => !prev)}
        ref={buttonRef}
      >
        {button}
      </button>
      <DropdownMenu
        className="w-[260px] overflow-hidden rounded-md"
        open={open}
        defaultPosition={defaultPosition}
        offset={10}
        onClose={() => setOpen(false)}
        triggerRef={buttonRef}
      >
        {children}
      </DropdownMenu>
    </ActionsMenuContext.Provider>
  );
}

ActionsMenu.Item = Item;
