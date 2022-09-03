import "./styles/styles.scss";
import { clickOutside } from "./utils";

/**
 * Toggle mobile menu
 */

const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
const nav = document.getElementById("main-navigation") as HTMLDivElement;

let open = false;

const toggleMobileMenu = (e?: MouseEvent) => {
  e?.stopPropagation();
  open = !open;
  hamburger.setAttribute("aria-expanded", `${open}`);
  nav.classList.toggle("open");
  open ? window.addEventListener("click", handleClickOutside) : window.removeEventListener("click", handleClickOutside);
};

const handleClickOutside = clickOutside(nav, toggleMobileMenu);
hamburger.addEventListener("click", toggleMobileMenu);
