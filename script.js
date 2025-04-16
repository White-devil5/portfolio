const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white/50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-theme-dark",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white/50",
      "shadow-sm",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white/50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-theme-dark",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white/50",
      "shadow-sm",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

/* if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
} */

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    // Whenever the user explicitly chooses light mode
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    // Whenever the user explicitly chooses dark mode
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
  // Uncomment the following line if you want to respect OS preference
  // localStorage.removeItem("theme");
}
