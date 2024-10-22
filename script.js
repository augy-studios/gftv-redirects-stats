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

let shortLinks = {
  data: [
    // GFTV
    {
      experimentName: "GFTV Timeline",
      category: ["GFTV"],
      link: theHostname + "/gftv-history",
    },
    {
      experimentName: "GFTV Anthem Player (V2!)",
      category: ["GFTV"],
      link: theHostname + "/gftv-player",
    },
    {
      experimentName: "GFTV Values Decorative",
      category: ["GFTV"],
      link: theHostname + "/gftv-values",
    },
    {
      experimentName: "GFTV Oath",
      category: ["GFTV"],
      link: theHostname + "/gftv-oath",
    },
    {
      experimentName: "GFTV Oath (Chinese Edition)",
      category: ["GFTV"],
      link: theHostname + "/gftv-oath-cn",
    },
    {
      experimentName: "GFTV 9th Anniversary",
      category: ["GFTV"],
      link: theHostname + "/gftv-9anni",
    },
    {
      experimentName: "GFTV Furry QnA (Soon)",
      category: ["GFTV"],
      link: theHostname + "/gftv-qna",
    },
    {
      experimentName: "GFTV Key Data Animated",
      category: ["GFTV"],
      link: theHostname + "/gftv-keydata",
    },
  ],
};

shortLinks.data = shortLinks.data.sort(compareFn);

for (let i of shortLinks.data) {

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

  //short link name
  let name = document.createElement("h3");
  name.classList.add("shortLink-name");
  name.innerText = i.experimentName;
  container.appendChild(name);

  card.appendChild(container);
  document.getElementById("shortLinks").appendChild(card);
}

//link
document.getElementById("shortLinks").addEventListener("click", function (event) {
  let target = event.target;

  while (target !== this) {
    if (target.classList.contains('card')) {
      const link = shortLinks.data.find(e => e.experimentName === target.querySelector('.shortLink-name').innerText).link;

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
let elements = document.querySelectorAll(".shortLink-name");
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

//Initially display all shortLinks
window.onload = () => {
  document.getElementById("shortLinks").style.display = "none";
  document.getElementById("loader").style.display = "block";
  filterExperiment("all");
  document.getElementById("loader").style.display = "none";
  document.getElementById("shortLinks").style.display = "grid";
};