// Back button on single country page
const goBackButton = document.querySelector('#btn_back');

goBackButton.addEventListener('click', () => {
  history.back();
});

// Light / Dark Mode handling
let darkMode = localStorage.getItem('darkMode');
const switchThemeButton = document.querySelector('#switch-theme');

const selectMode = {
  mode: [ {
    name: document.querySelector('body')
  },
  {
    name: document.querySelector('.country__header')
  },
  {
    name: document.querySelector('.header__top')
  },
  {
    name: document.querySelector('.header__title')
  },
  {
    name: document.querySelector('.country__container--single')
  },
  {
    name: document.querySelector('.country__card--single')
  },
  {
    name: document.querySelector('.section__details')
  },
  {
    name: document.querySelector('.country__footer')
  },
  ]
}

switchThemeButton.textContent = "Dark Mode";

const enableSwitchMode = () => {
  for (let i = 0; i < selectMode.mode.length; i++) {
      selectMode.mode[i].name.classList.add('dark-mode');
      switchThemeButton.textContent = "Light Mode";
      localStorage.setItem('darkMode', 'enabled');
    }
};
const disableSwitchMode = () => {
  for (let i = 0; i < selectMode.mode.length; i++) {
      selectMode.mode[i].name.classList.remove('dark-mode');
      switchThemeButton.textContent = "Dark Mode";
      localStorage.setItem('darkMode', null);
    }
}

if (darkMode === 'enabled') {
  enableSwitchMode();
}

switchThemeButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableSwitchMode();
    console.log(darkMode);
  }
  else {
    disableSwitchMode();
    console.log(darkMode);
  }
})