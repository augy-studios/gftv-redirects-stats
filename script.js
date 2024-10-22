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
      link: theHostname + "/gftv-history",
    },
    {
      experimentName: "GFTV Anthem Player (V2!)",
      link: theHostname + "/gftv-player",
    },
    {
      experimentName: "GFTV Values Decorative",
      link: theHostname + "/gftv-values",
    },
    {
      experimentName: "GFTV Oath",
      link: theHostname + "/gftv-oath",
    },
    {
      experimentName: "GFTV Oath (Chinese Edition)",
      link: theHostname + "/gftv-oath-cn",
    },
    {
      experimentName: "GFTV 9th Anniversary",
      link: theHostname + "/gftv-9anni",
    },
    {
      experimentName: "GFTV Furry QnA (Soon)",
      link: theHostname + "/gftv-qna",
    },
    {
      experimentName: "GFTV Key Data Animated",
      link: theHostname + "/gftv-keydata",
    },
  ],
};

shortLinks.data = shortLinks.data.sort(compareFn);

for (let i of shortLinks.data) {

  //Create Card
  let card = document.createElement("div");

  //Card should have statusCode and should stay hidden initially
  card.classList.add("card", ...i.statusCode, "hide");

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

//parameter passed from button (Parameter same as statusCode)
function filterShortLink(value) {

  //select all cards
  let elements = document.querySelectorAll(".card");

  //loop through all cards
  elements.forEach((element) => {

    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {

      //Check if element contains statusCode class
      if (element.classList.contains(value)) {

        //display element based on statusCode
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
  filterShortLink("all");
  document.getElementById("loader").style.display = "none";
  document.getElementById("shortLinks").style.display = "grid";
};