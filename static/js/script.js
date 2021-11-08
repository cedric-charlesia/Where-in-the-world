// Preventing from reloading page in case of nothing input
const searchButton = document.querySelector('.btn')
const inputSearch = document.querySelector('.search-country')
const warning = document.querySelector('.warning')

searchButton.addEventListener('click', (event) => {
  if (inputSearch.value === '') {
    event.preventDefault();
    warning.style.display = "block";
    setTimeout(() => {
      warning.style.display = "none";
    }, 2000);
  }
})

// Displaying the countries by selected region
// (according to routes in router.js and controller.js)
const continent = document.querySelector('#select-region');

continent.addEventListener('change', () => {
  if (continent.value === "Africa") {
    location.href = '/continent/africa';
  }
  else if (continent.value === "America") {
    location.href = '/continent/america';
  }
  else if (continent.value === "Asia") {
    location.href = '/continent/asia';
  }
  else if (continent.value === "Europe") {
    location.href = '/continent/europe';
  }
  else if (continent.value === "Oceania") {
    location.href = '/continent/oceania';
  }
  else if (continent.value === "All") {
    location.href = '/continent/all';
  }
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
    name: document.querySelector('.header__form')
  },
  {
    name: document.querySelector('.header__title')
  },
  {
    name: document.querySelector('.country__container')
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