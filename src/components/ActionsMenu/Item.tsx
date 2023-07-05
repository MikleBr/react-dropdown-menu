import { useActionMenuContext } from './context';

type Props = React.HTMLAttributes<HTMLButtonElement>;

export default function Item({
  className = '',
  children,
  onClick,
  ...props
}: Props) {
  const { setOpen } = useActionMenuContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick?.(event);
    setOpen(false);
  };

  return (
    <button
      className={`${className} p-2 w-full transition-all hover:bg-[#e4e4e4]`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
