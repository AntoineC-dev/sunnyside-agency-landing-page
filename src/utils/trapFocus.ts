const focusableSelectors = "a[href]:not([disabled='true']), button:not([disabled='true']), [tabIndex]";

// Function
export function trapFocus(el: HTMLElement, toggleEl: HTMLElement, callback: () => void) {
  const focusableEls = Array.from(el.querySelectorAll(focusableSelectors)) as HTMLElement[];
  const firstFocusable = focusableEls[0];
  const lastFocusable = focusableEls[focusableEls.length - 1];

  const handleTrapFocus = (e: KeyboardEvent) => {
    const isTabPressed = e.key === "Tab";
    const isEscPressed = e.key === "Escape";
    if (!isTabPressed && !isEscPressed) return;
    if (isEscPressed) return callback();
    const shouldGoToFirst = !e.shiftKey && document.activeElement === lastFocusable;
    const shouldGoToLast = e.shiftKey && document.activeElement === firstFocusable;
    if (!shouldGoToLast && !shouldGoToFirst) return;
    e.preventDefault();
    shouldGoToLast ? lastFocusable.focus() : firstFocusable.focus();
  };
  const handleListeners = (shouldListen: boolean) => {
    if (shouldListen) {
      firstFocusable.focus();
      el.addEventListener("keydown", handleTrapFocus);
    } else {
      el.removeEventListener("keydown", handleTrapFocus);
      toggleEl.focus();
    }
  };

  return handleListeners;
}
