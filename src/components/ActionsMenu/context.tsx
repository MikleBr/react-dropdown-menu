import { useContext, createContext } from 'react';

type ActionsMenuContextProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ActionsMenuContext = createContext<ActionsMenuContextProps | null>(
  null
);

export function useActionMenuContext() {
  const context = useContext(ActionsMenuContext);

  if (context === null) {
    throw new Error(
      'user `ActionsMenuContext` inside `ActionsMenuContextProvider`'
    );
  }

  return context;
}
