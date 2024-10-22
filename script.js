function compareFn(a, b) {
  if (a.experimentName < b.experimentName) {
    return -1;
  } else if (a.experimentName > b.experimentName) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

// Dynamic Search
let urlHostname = (new URL(document.location)).hostname
let theHostname = "https://" + urlHostname

let experiments = {
  data: [
    // GFTV
    {
      experimentName: "GFTV Timeline",
      category: ["GFTV"],
      link: theHostname + "/gftv-history",
      image: "/search/img/gftv-history.png",
    },
    {
      experimentName: "GFTV Anthem Player (V2!)",
      category: ["GFTV"],
      link: theHostname + "/gftv-player",
      image: "/search/img/gftv-player.png",
    },
    {
      experimentName: "GFTV Values Decorative",
      category: ["GFTV"],
      link: theHostname + "/gftv-values",
      image: "/search/img/gftv-values.png",
    },
    {
      experimentName: "GFTV Oath",
      category: ["GFTV"],
      link: theHostname + "/gftv-oath",
      image: "/search/img/gftv-oath.png",
    },
    {
      experimentName: "GFTV Oath (Chinese Edition)",
      category: ["GFTV"],
      link: theHostname + "/gftv-oath-cn",
      image: "/search/img/gftv-oath-cn.png",
    },
    {
      experimentName: "GFTV 9th Anniversary",
      category: ["GFTV"],
      link: theHostname + "/gftv-9anni",
      image: "/search/img/gftv-9anni.png",
    },
    {
      experimentName: "GFTV Furry QnA (Soon)",
      category: ["GFTV"],
      link: theHostname + "/gftv-qna",
      image: "/search/img/heart.png",
    },
    {
      experimentName: "GFTV Key Data Animated",
      category: ["GFTV"],
      link: theHostname + "/gftv-keydata",
      image: "/search/img/gftv-keydata.png",
    },

    // AI
    {
      experimentName: "Chatbot (broken)",
      category: ["AI"],
      link: theHostname + "/chatbot",
      image: "/search/img/heart.png",
    },
    {
      experimentName: "ChatGPT (broken)",
      category: ["AI"],
      link: theHostname + "/chatgpt",
      image: "/search/img/heart.png",
    },

    // Games
    {
      experimentName: "Rock Paper Scissors Game (V2!)",
      category: ["Games"],
      link: theHostname + "/rps-game",
      image: "/search/img/rps-game.png",
    },
    {
      experimentName: "Snake Game",
      category: ["Games"],
      link: theHostname + "/snake-game",
      image: "/search/img/snake-game.png",
    },
    {
      experimentName: "Hangman",
      category: ["Games"],
      link: theHostname + "/hangman",
      image: "/search/img/hangman.png",
    },
    {
      experimentName: "Guess the Word",
      category: ["Games"],
      link: theHostname + "/word-guess",
      image: "/search/img/word-guess.png",
    },
    {
      experimentName: "Tic Tac Toe",
      category: ["Games"],
      link: theHostname + "/tic-tac-toe",
      image: "/search/img/tic-tac-toe.png",
    },
    {
      experimentName: "Flags Match Game",
      category: ["Games"],
      link: theHostname + "/flag-match",
      image: "/search/img/flag-match.png",
    },
    {
      experimentName: "Memory Game",
      category: ["Games"],
      link: theHostname + "/mem-game",
      image: "/search/img/mem-game.png",
    },
    {
      experimentName: "2048 Game",
      category: ["Games"],
      link: theHostname + "/2048-game",
      image: "/search/img/2048-game.png",
    },
    {
      experimentName: "Connect 4 Game",
      category: ["Games"],
      link: theHostname + "/connect-4",
      image: "/search/img/connect-4.png",
    },
    {
      experimentName: "Colour Guessing Game",
      category: ["Games"],
      link: theHostname + "/color-guess",
      image: "/search/img/color-guess.png",
    },
    {
      experimentName: "Pokemon Guesser",
      category: ["Games"],
      link: theHostname + "/poke-guess",
      image: "/search/img/poke-guess.png",
    },
    {
      experimentName: "Math Game",
      category: ["Games"],
      link: theHostname + "/math-game",
      image: "/search/img/math-game.png",
    },
    {
      experimentName: "Wordle",
      category: ["Games"],
      link: theHostname + "/wordle-game",
      image: "/search/img/wordle-game.png",
    },

    // Utility
    {
      experimentName: "Captcha Generator",
      category: ["Utility"],
      link: theHostname + "/captcha",
      image: "/search/img/captcha.png",
    },
    {
      experimentName: "Image Editor",
      category: ["Utility"],
      link: theHostname + "/img-edit",
      image: "/search/img/img-edit.png",
    },
    {
      experimentName: "Image Resizer",
      category: ["Utility"],
      link: theHostname + "/img-resize",
      image: "/search/img/img-resize.png",
    },
    {
      experimentName: "Password Validator",
      category: ["Utility"],
      link: theHostname + "/pw-validate",
      image: "/search/img/pw-validate.png",
    },
    {
      experimentName: "Random Password Generator",
      category: ["Utility"],
      link: theHostname + "/pw-generate",
      image: "/search/img/pw-generate.png",
    },
    {
      experimentName: "Sticky Notes",
      category: ["Utility"],
      link: theHostname + "/notes-app",
      image: "/search/img/notes-app.png",
    },
    {
      experimentName: "Colour Palette Generator",
      category: ["Utility"],
      link: theHostname + "/color-palette",
      image: "/search/img/color-palette.png",
    },
    {
      experimentName: "Drawing App",
      category: ["Utility"],
      link: theHostname + "/drawing-app",
      image: "/search/img/drawing-app.png",
    },
    {
      experimentName: "Music Player (Soon)",
      category: ["Utility"],
      link: theHostname + "/music-player",
      image: "/search/img/heart.png",
    },
    {
      experimentName: "Emoji Mood Slider",
      category: ["Utility"],
      link: theHostname + "/emoji-mood",
      image: "/search/img/emoji-mood.png",
    },
    {
      experimentName: "To-do List (V2!)",
      category: ["Utility"],
      link: theHostname + "/todo-list",
      image: "/search/img/todo-list.png",
    },
    {
      experimentName: "Aspect Ratio Calculator",
      category: ["Utility"],
      link: theHostname + "/aspect-ratio",
      image: "/search/img/aspect-ratio.png",
    },
    {
      experimentName: "Tally Counter",
      category: ["Utility"],
      link: theHostname + "/tally",
      image: "/search/img/tally.png",
    },
    {
      experimentName: "Weight Converter",
      category: ["Utility"],
      link: theHostname + "/weight-convert",
      image: "/search/img/weight-convert.png",
    },
    {
      experimentName: "Flip A Coin",
      category: ["Utility"],
      link: theHostname + "/coin-flip",
      image: "/search/img/coin-flip.png",
    },
    {
      experimentName: "Multi-Dice Roller (V3!)",
      category: ["Utility"],
      link: theHostname + "/dices-roll",
      image: "/search/img/dices-roll.png",
    },
    {
      experimentName: "Random Colour Generator",
      category: ["Utility"],
      link: theHostname + "/random-hex",
      image: "/search/img/random-hex.png",
    },
    {
      experimentName: "Age Calculator",
      category: ["Utility"],
      link: theHostname + "/age-calc",
      image: "/search/img/age-calc.png",
    },
    {
      experimentName: "Temperature Converter",
      category: ["Utility"],
      link: theHostname + "/temp-convert",
      image: "/search/img/temp-convert.png",
    },
    {
      experimentName: "BMI Calculator",
      category: ["Utility"],
      link: theHostname + "/bmi-calc",
      image: "/search/img/bmi-calc.png",
    },
    {
      experimentName: "Days Difference Calculator",
      category: ["Utility"],
      link: theHostname + "/days-calc",
      image: "/search/img/days-calc.png",
    },
    {
      experimentName: "Rich Text Editor",
      category: ["Utility"],
      link: theHostname + "/text-edit",
      image: "/search/img/text-edit.png",
    },
    {
      experimentName: "Interest Calculator",
      category: ["Utility"],
      link: theHostname + "/intpa-calc",
      image: "/search/img/intpa-calc.png",
    },
    {
      experimentName: "Colour Contrast Checker",
      category: ["Utility"],
      link: theHostname + "/check-contrast",
      image: "/search/img/check-contrast.png",
    },
    {
      experimentName: "Morse Code Translator",
      category: ["Utility"],
      link: theHostname + "/morse-convert",
      image: "/search/img/morse-convert.png",
    },
    {
      experimentName: "Character Counter",
      category: ["Utility"],
      link: theHostname + "/char-count",
      image: "/search/img/char-count.png",
    },
    {
      experimentName: "Gradient Code Generator (CSS)",
      category: ["Utility"],
      link: theHostname + "/gradient-gen",
      image: "/search/img/gradient-gen.png",
    },
    {
      experimentName: "Binary-Decimal Converter",
      category: ["Utility"],
      link: theHostname + "/bin-convert",
      image: "/search/img/bin-convert.png",
    },
    {
      experimentName: "Translate (V2 Soon!)",
      category: ["Utility"],
      link: theHostname + "/translator",
      image: "/search/img/translator.png",
    },
    {
      experimentName: "Currency Converter (V4!)",
      category: ["Utility"],
      link: theHostname + "/money-convert",
      image: "/search/img/money-convert.png",
    },
    {
      experimentName: "Scuffed English Dictionary",
      category: ["Utility"],
      link: theHostname + "/scuffed-en",
      image: "/search/img/scuffed-en.png",
    },
    {
      experimentName: "Text-To-Speech Converter",
      category: ["Utility"],
      link: theHostname + "/tts-convert",
      image: "/search/img/tts-convert.png",
    },
    {
      experimentName: "Random Quote Generator (V2!)",
      category: ["Utility"],
      link: theHostname + "/quote-otd",
      image: "/search/img/quote-otd.png",
    },
    {
      experimentName: "Random Joke Generator",
      category: ["Utility"],
      link: theHostname + "/joke-otd",
      image: "/search/img/joke-otd.png",
    },
    {
      experimentName: "Pexels Free Images",
      category: ["Utility"],
      link: theHostname + "/pexels",
      image: "/search/img/pexels.png",
    },
    {
      experimentName: "Stereotype Gender by Name",
      category: ["Utility"],
      link: theHostname + "/name-gender",
      image: "/search/img/name-gender.png",
    },
    {
      experimentName: "Singapore PSI",
      category: ["Utility"],
      link: theHostname + "/sg-psi",
      image: "/search/img/sg-psi.png",
    },
    {
      experimentName: "QR Code Scanner",
      category: ["Utility"],
      link: theHostname + "/qr-scan",
      image: "/search/img/qr-scan.png",
    },
    {
      experimentName: "QR Code Generator",
      category: ["Utility"],
      link: theHostname + "/qr-create",
      image: "/search/img/qr-create.png",
    },
    {
      experimentName: "Image Color Picker (Google Chrome Only)",
      category: ["Utility"],
      link: theHostname + "/img-picker",
      image: "/search/img/img-picker.png",
    },
    {
      experimentName: "Spin Wheel",
      category: ["Utility"],
      link: theHostname + "/spin-wheel",
      image: "/search/img/spin-wheel.png",
    },
    {
      experimentName: "Random Name Picker",
      category: ["Utility"],
      link: theHostname + "/random-name",
      image: "/search/img/random-name.png",
    },
    {
      experimentName: "Ciphers",
      category: ["Utility"],
      link: theHostname + "/ciphers",
      image: "/search/img/heart.png",
    },

    // Clock
    {
      experimentName: "Digital Clock",
      category: ["Clock"],
      link: theHostname + "/digital-clock",
      image: "/search/img/digital-clock.png",
    },
    {
      experimentName: "Analog Clock",
      category: ["Clock"],
      link: theHostname + "/analog-clock",
      image: "/search/img/analog-clock.png",
    },
    {
      experimentName: "Alarm Clock (V2!)",
      category: ["Clock"],
      link: theHostname + "/alarm-clock",
      image: "/search/img/alarm-clock.png",
    },
    {
      experimentName: "Stopwatch",
      category: ["Clock"],
      link: theHostname + "/stopwatch",
      image: "/search/img/stopwatch.png",
    },
    {
      experimentName: "Glass Digital Clock (Soon)",
      category: ["Clock"],
      link: theHostname + "/digi-glass",
      image: "/search/img/heart.png",
    },

    // OBS
    {
      experimentName: "Confetti for OBS",
      category: ["OBS"],
      link: theHostname + "/confetti-obs",
      image: "/search/img/confetti-obs.png",
    },

    // Guide
    {
      experimentName: "Country Guide",
      category: ["Guide"],
      link: theHostname + "/cty-info",
      image: "/search/img/cty-info.png",
    },
    {
      experimentName: "Cocktail Guide",
      category: ["Guide"],
      link: theHostname + "/cocktail-info",
      image: "/search/img/cocktail-info.png",
    },
    {
      experimentName: "Recipe Guide",
      category: ["Guide"],
      link: theHostname + "/recipe-info",
      image: "/search/img/recipe-info.png",
    },
    {
      experimentName: "Movie Guide",
      category: ["Guide"],
      link: theHostname + "/movie-info",
      image: "/search/img/movie-info.png",
    },

    // Location
    {
      experimentName: "Weather (V2)",
      category: ["Location"],
      link: theHostname + "/weather",
      image: "/search/img/weather.png",
    },
    {
      experimentName: "Where Am I?",
      category: ["Location"],
      link: theHostname + "/where",
      image: "/search/img/where.png",
    },

    // Miscellaneous
    {
      experimentName: "Fireworks (V2!)",
      category: ["Miscellaneous"],
      link: theHostname + "/fireworks",
      image: "/search/img/fireworks.png",
    },
    {
      experimentName: "Click Fireworks",
      category: ["Miscellaneous"],
      link: theHostname + "/fireworks-click",
      image: "/search/img/fireworks-click.png",
    },
    {
      experimentName: "Tick Tock",
      category: ["Miscellaneous"],
      link: theHostname + "/tktk",
      image: "/search/img/tktk.png",
    },
    {
      experimentName: "Happy Birthday Cake",
      category: ["Miscellaneous"],
      link: theHostname + "/bday-cake",
      image: "/search/img/bday-cake.png",
    },
    {
      experimentName: "Custom Right-Click Menu",
      category: ["Miscellaneous"],
      link: theHostname + "/context-menu",
      image: "/search/img/context-menu.png",
    },
    {
      experimentName: "Rewind Hydration Header",
      category: ["Miscellaneous"],
      link: theHostname + "/rewind-title",
      image: "/search/img/rewind-title.png",
    },
    {
      experimentName: "Drag and Drop (POC)",
      category: ["Miscellaneous"],
      link: theHostname + "/drag-drop",
      image: "/search/img/drag-drop.png",
    },
    {
      experimentName: "Crab Rave",
      category: ["Miscellaneous"],
      link: theHostname + "/crab-rave",
      image: "/search/img/crab-rave.png",
    },
    {
      experimentName: "Pop-Up Share",
      category: ["Miscellaneous"],
      link: theHostname + "/pop-share",
      image: "/search/img/pop-share.png",
    },
    {
      experimentName: "Detect Tab Change",
      category: ["Miscellaneous"],
      link: theHostname + "/detect-tab",
      image: "/search/img/detect-tab.png",
    },
    {
      experimentName: "Your Only Fan",
      category: ["Miscellaneous"],
      link: theHostname + "/your-fan",
      image: "/search/img/your-fan.png",
    },
    {
      experimentName: "Halloween Pumpkin Throw",
      category: ["Miscellaneous"],
      link: theHostname + "/throw-pumpkins",
      image: "/search/img/throw-pumpkins.png",
    },
    {
      experimentName: "Detect Device Orientation",
      category: ["Miscellaneous"],
      link: theHostname + "/detect-screenrot",
      image: "/search/img/detect-screenrot.png",
    },
    {
      experimentName: "Detect Browser & OS",
      category: ["Miscellaneous"],
      link: theHostname + "/detect-browseros",
      image: "/search/img/detect-browseros.png",
    },
    {
      experimentName: "Detect Battery Status",
      category: ["Miscellaneous"],
      link: theHostname + "/detect-battery",
      image: "/search/img/detect-battery.png",
    },
    {
      experimentName: "Detect JavaScript Status",
      category: ["Miscellaneous"],
      link: theHostname + "/detect-js",
      image: "/search/img/detect-js.png",
    },
    {
      experimentName: "Among Us",
      category: ["Miscellaneous"],
      link: theHostname + "/among-us",
      image: "/search/img/among-us.png",
    },
    {
      experimentName: "Confetti (Rainbow)",
      category: ["Miscellaneous"],
      link: theHostname + "/confetti-gay",
      image: "/search/img/confetti-gay.png",
    },
    {
      experimentName: "Snow",
      category: ["Miscellaneous"],
      link: theHostname + "/snow",
      image: "/search/img/snow.png",
    },
    {
      experimentName: "Snowflake",
      category: ["Miscellaneous"],
      link: theHostname + "/snowflake",
      image: "/search/img/snowflake.png",
    },
    {
      experimentName: "Minecraft Nether (The Audio-Visual Experience)",
      category: ["Miscellaneous"],
      link: theHostname + "/mc-nether",
      image: "/search/img/mc-nether.png",
    },
    {
      experimentName: "Fireworks with Sound",
      category: ["Miscellaneous"],
      link: theHostname + "/fireworks-sound",
      image: "/search/img/fireworks-sound.png",
    },
    {
      experimentName: "Wood",
      category: ["Miscellaneous"],
      link: theHostname + "/cute-wood",
      image: "/search/img/cute-wood.png",
    },
    {
      experimentName: "Loading Thing",
      category: ["Miscellaneous"],
      link: theHostname + "/loading",
      image: "/search/img/loading.png",
    },
    {
      experimentName: "Quiz",
      category: ["Miscellaneous"],
      link: theHostname + "/quiz",
      image: "/search/img/quiz.png",
    },
    {
      experimentName: "URL Shortener (Broken)",
      category: ["Miscellaneous"],
      link: theHostname + "/shorturl",
      image: "/search/img/shorturl.png",
    },

    // Multi-Category
    {
      experimentName: "Nice Cock",
      category: ["GFTV", "Miscellaneous"],
      link: theHostname + "/ncck",
      image: "/search/img/ncck.png",
    },
    {
      experimentName: "GFTV Values for OBS",
      category: ["GFTV", "OBS"],
      link: theHostname + "/gftv-values-obs",
      image: "/search/img/gftv-values-obs.png",
    },
    {
      experimentName: "Typing Speed Test",
      category: ["Games", "Utility"],
      link: theHostname + "/speed-type",
      image: "/search/img/speed-type.png",
    },
    {
      experimentName: "Date Time Widget for OBS",
      category: ["OBS", "Clock"],
      link: theHostname + "/datetime-obs",
      image: "/search/img/datetime-obs.png",
    },
    {
      experimentName: "Digital Clock for OBS",
      category: ["OBS", "Clock"],
      link: theHostname + "/digital-clock-obs",
      image: "/search/img/digital-clock-obs.png",
    },
    {
      experimentName: "Stopwatch for OBS",
      category: ["OBS", "Clock"],
      link: theHostname + "/stopwatch-obs",
      image: "/search/img/stopwatch-obs.png",
    },
    {
      experimentName: "Pokemon Card Generator",
      category: ["Utility", "Games"],
      link: theHostname + "/poke-gen",
      image: "/search/img/poke-gen.png",
    },
    {
      experimentName: "Confetti for OBS (High-Res)",
      category: ["Miscellaneous", "OBS"],
      link: theHostname + "/confetti-hq",
      image: "/search/img/confetti-hq.png",
    },
    {
      experimentName: "Money Rain (OBS)",
      category: ["Miscellaneous", "OBS"],
      link: theHostname + "/rain-money",
      image: "/search/img/rain-money.png",
    },
    {
      experimentName: "New Year Countdown",
      category: ["Clock", "Utility"],
      link: theHostname + "/new-year",
      image: "/search/img/new-year.png",
    },
  ],
};

experiments.data = experiments.data.sort(compareFn);

for (let i of experiments.data) {

  //Create Card
  let card = document.createElement("div");

  //Card should have category and should stay hidden initially
  card.classList.add("card", ...i.category, "hide");

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("loading", "lazy");
  image.setAttribute("alt", i.experimentName);
  image.setAttribute("title", i.experimentName);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //experiment name
  let name = document.createElement("h3");
  name.classList.add("experiment-name");
  name.innerText = i.experimentName;
  container.appendChild(name);

  card.appendChild(container);
  document.getElementById("experiments").appendChild(card);
}

//link
document.getElementById("experiments").addEventListener("click", function (event) {
  let target = event.target;

  while (target !== this) {
    if (target.classList.contains('card')) {
      const link = experiments.data.find(e => e.experimentName === target.querySelector('.experiment-name').innerText).link;

      const newWindow = window.open(link, "_self");

      if (!newWindow) {
        window.location.href = link;
      }

      return;
    }
    target = target.parentNode;
  }
});

//parameter passed from button (Parameter same as category)
function filterExperiment(value) {

  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {

    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");

  //loop through all cards
  elements.forEach((element) => {

    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {

      //Check if element contains category class
      if (element.classList.contains(value)) {

        //display element based on category
        element.classList.remove("hide");

      } else {

        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//initializations
let searchBtn = document.getElementById("search");
let searchInp = document.getElementById("search-input");
let elements = document.querySelectorAll(".experiment-name");
let cards = document.querySelectorAll(".card");

//Search on enter
searchInp.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    getExperiments();
  }
});

//Search on click
searchBtn.addEventListener("click", getExperiments);

function getExperiments() {

  //loop through all elements
  elements.forEach((element, index) => {

    //check if text includes the search value
    if (element.innerText.toLowerCase().includes(searchInp.value.toLowerCase())) {

      //display matching card
      cards[index].classList.remove("hide");
    } else {

      //hide others
      cards[index].classList.add("hide");
    }
  });
};

// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;

//Initially display all experiments
window.onload = () => {
  document.getElementById("experiments").style.display = "none";
  document.getElementById("loader").style.display = "block";
  filterExperiment("all");
  document.getElementById("loader").style.display = "none";
  document.getElementById("experiments").style.display = "grid";
};