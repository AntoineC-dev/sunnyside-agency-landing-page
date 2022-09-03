export const clickOutside = (element: HTMLElement, callback: () => void) => {
  const handleClickOutside = (e: MouseEvent) => !element.contains(e.target as Node) && callback();

  const handleListeners = (shouldListen: boolean) => {
    if (shouldListen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
  };

  return handleListeners;
};
