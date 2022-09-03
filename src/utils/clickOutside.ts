export const clickOutside = (element: HTMLElement, callback: () => void) => (e: MouseEvent) =>
  !element.contains(e.target as Node) && callback();
