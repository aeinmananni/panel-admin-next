import { useEffect, useState } from "react";

export const useDelayedShowMenu = (showMenu: boolean) => {
  const [delayedShowMenu, setDelayedShowMenu] = useState<boolean>(showMenu);

  useEffect(() => {
    if (showMenu) {
      const timer = setTimeout(() => setDelayedShowMenu(true), 250);

      return () => clearTimeout(timer);
    } else {
      setDelayedShowMenu(false);
    }
  }, [showMenu]);

  return { delayedShowMenu };
};
