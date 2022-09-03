import "./styles/styles.scss";
import { clickOutside, trapFocus } from "./utils";

/**
 * Toggle mobile menu
 */

const nav = document.getElementById("nav") as HTMLDivElement;
const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
const navItems = document.getElementById("nav-items") as HTMLDivElement;

let navOpen = false;

const toggleMobileMenu = () => {
  navOpen = !navOpen;
  hamburger.setAttribute("aria-expanded", `${navOpen}`);
  navItems.classList.toggle("open");
  handleClickOutside(navOpen);
  handleTrapFocus(navOpen);
};

const handleClickOutside = clickOutside(nav, toggleMobileMenu);
const handleTrapFocus = trapFocus(nav, hamburger, toggleMobileMenu);
hamburger.addEventListener("click", toggleMobileMenu);
