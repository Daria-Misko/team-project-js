// import

const changeThemeBtn = document.querySelectorAll('.switch-checkbox');
const bodyTheme = document.querySelector('body');
const themeDarkEl = document.querySelector('.theme__dark');
const themeLightEl = document.querySelector('.theme__light');

[...changeThemeBtn].map(btn => btn.addEventListener('click', changeTheme));

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeDarkEl.classList.toggle('opacityForDark');
  themeLightEl.classList.toggle('opacityForDark');

  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('darkMode');
      changeThemeBtn.checked = true;
    }
  } catch (err) {}
}

addDarkClassToHTML();

// (() => {
//   const toggleMenu = () => {
//     const isMenuOpen =
//     refs.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     refs.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     refs.mobileMenu.classList.toggle("is-open");

//     const scrollLockMethod = isMenuOpen ? enableBodyScroll : disableBodyScroll;
//     scrollLockMethod(document.body);
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     refs.mobileMenu.classList.remove("is-open");
//     refs.openMenuBtn.setAttribute("aria-expanded", false);
//     enableBodyScroll(document.body);
//   });
// })();
