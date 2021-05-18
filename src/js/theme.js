if (JSON.parse(localStorage.getItem("userTheme")) == null) localStorage.setItem("userTheme", 1)
console.log(JSON.parse(localStorage.getItem("userTheme")))

let BACKGROUND_COLOR = "",
  BACKGROUND_COLOR_INPUT = "",
  BACKGROUND_COLOR_DISPLAY = "",
  TEXT_COLOR = "",
  TEXT_COLOR_SECOND = "",
  TEXT_COLOR_THIRD = "hsl(198, 20%, 13%)",
  BTN_KEY = "",
  BTN_KEY_SHADOW = "",
  BTN_KEY_RESET = "",
  BTN_KEY_RESET_SHADOW = "",
  BTN_KEY_EQUAL = "",
  BTN_KEY_EQUAL_SHADOW = "",
  USER_THEME_SELECTED = JSON.parse(localStorage.getItem("userTheme"));

const switchTheme = () => {
  USER_THEME_SELECTED++;
  if (USER_THEME_SELECTED < 1) USER_THEME_SELECTED = 3;
  if (USER_THEME_SELECTED > 3) USER_THEME_SELECTED = 1;
  localStorage.setItem("userTheme", USER_THEME_SELECTED)

  return displayTheme(USER_THEME_SELECTED);
};

const setColor = (themeSelected) => {
  const btnEqual = document.body.querySelector("#btn-equal"),
    sliderCircle = document.body.querySelector("#slider__circle");
  if (themeSelected === 1) {
    (BACKGROUND_COLOR = "hsl(222, 26%, 31%)"),
      (BACKGROUND_COLOR_INPUT = "hsl(223, 31%, 20%)"),
      (BACKGROUND_COLOR_DISPLAY = "hsl(224, 36%, 15%)"),
      (TEXT_COLOR = "rgb(255,255,255)"),
      (TEXT_COLOR_SECOND = "hsl(221, 14%, 31%)"),
      (BTN_KEY = "hsl(30, 25%, 89%)"),
      (BTN_KEY_SHADOW = "hsl(28, 16%, 65%)"),
      (BTN_KEY_RESET = "hsl(225, 21%, 49%)"),
      (BTN_KEY_RESET_SHADOW = "hsl(224, 28%, 35%)"),
      (BTN_KEY_EQUAL = "hsl(6, 63%, 50%)"),
      (BTN_KEY_EQUAL_SHADOW = "hsl(6, 70%, 34%)");
    document.body.style.color = null;
    btnEqual.style.color = null;
    sliderCircle.style.left = ".25rem"
  }
  if (themeSelected === 2) {
    (BACKGROUND_COLOR = " hsl(0, 0%, 90%)"),
      (BACKGROUND_COLOR_INPUT = "hsl(0, 5%, 81%)"),
      (BACKGROUND_COLOR_DISPLAY = "hsl(0, 0%, 93%)"),
      (TEXT_COLOR = "rgb(255,255,255)"),
      (TEXT_COLOR_SECOND = "hsl(60, 10%, 19%)"),
      (BTN_KEY = "hsl(45, 7%, 89%)"),
      (BTN_KEY_SHADOW = "hsl(35, 11%, 61%)"),
      (BTN_KEY_RESET = "hsl(185, 42%, 37%)"),
      (BTN_KEY_RESET_SHADOW = "hsl(185, 58%, 25%)"),
      (BTN_KEY_EQUAL = "hsl(25, 98%, 40%)"),
      (BTN_KEY_EQUAL_SHADOW = "hsl(25, 99%, 27%)");
    document.body.style.color = "var(--text-color-second)";
    sliderCircle.style.left = "calc(50% - .5rem)"
  }
  if (themeSelected === 3) {
    (BACKGROUND_COLOR = "hsl(268, 75%, 9%)"),
      (BACKGROUND_COLOR_INPUT = "hsl(268, 71%, 12%)"),
      (BACKGROUND_COLOR_DISPLAY = "hsl(268, 71%, 12%)"),
      (TEXT_COLOR = "rgb(255,255,255)"),
      (TEXT_COLOR_SECOND = "hsl(52, 100%, 62%)"),
      (BTN_KEY = "hsl(268, 47%, 21%)"),
      (BTN_KEY_SHADOW = "hsl(290, 70%, 36%)"),
      (BTN_KEY_RESET = "hsl(281, 89%, 26%)"),
      (BTN_KEY_RESET_SHADOW = "hsl(285, 91%, 52%)"),
      (BTN_KEY_EQUAL = "hsl(176, 100%, 44%)"),
      (BTN_KEY_EQUAL_SHADOW = "hsl(177, 92%, 70%)");
    btnEqual.style.color = "var(--text-color-third)";
    sliderCircle.style.left = "calc(100% - 1.25rem)"
  }
};

const displayTheme = (userChoice = 1) => {
  setColor(userChoice);
  const root = document.documentElement;

  root.style.setProperty("--background-color", BACKGROUND_COLOR);
  root.style.setProperty("--background-color-input", BACKGROUND_COLOR_INPUT);
  root.style.setProperty("--background-color-display", BACKGROUND_COLOR_DISPLAY);
  root.style.setProperty("--text-color", TEXT_COLOR);
  root.style.setProperty("--text-color-second", TEXT_COLOR_SECOND);
  root.style.setProperty("--text-color-third", TEXT_COLOR_THIRD);
  root.style.setProperty("--btn-key", BTN_KEY);
  root.style.setProperty("--btn-key-shadow", BTN_KEY_SHADOW);
  root.style.setProperty("--btn-key-reset", BTN_KEY_RESET);
  root.style.setProperty("--btn-key-reset-shadow", BTN_KEY_RESET_SHADOW);
  root.style.setProperty("--btn-key-equal", BTN_KEY_EQUAL);
  root.style.setProperty("--btn-key-equal-shadow", BTN_KEY_EQUAL_SHADOW);
};
displayTheme(USER_THEME_SELECTED);
