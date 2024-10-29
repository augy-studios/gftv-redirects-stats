function compareFn(a, b) {
  if (a.shortLinkName < b.shortLinkName) {
    return -1;
  } else if (a.shortLinkName > b.shortLinkName) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

// Dynamic Search
let urlHostname = (new URL(document.location)).hostname
let theHostname = "https://" + urlHostname.replace("stats.","")

let shortLinks = {
  data: [
    {
      shortLinkName: "/about",
      link: theHostname + "/about",
      statusCode: 307,
    },
    {
      shortLinkName: "/linkedin",
      link: theHostname + "/linkedin",
      statusCode: 307,
    },
    {
      shortLinkName: "/yt",
      link: theHostname + "/yt",
      statusCode: 307,
    },
    {
      shortLinkName: "/bili",
      link: theHostname + "/bili",
      statusCode: 307,
    },
    {
      shortLinkName: "/patreon",
      link: theHostname + "/patreon",
      statusCode: 307,
    },
    {
      shortLinkName: "/discord",
      link: theHostname + "/discord",
      statusCode: 307,
    },
    {
      shortLinkName: "/furryland",
      link: theHostname + "/furryland",
      statusCode: 307,
    },
    {
      shortLinkName: "/tg",
      link: theHostname + "/tg",
      statusCode: 307,
    },
  ],
};

shortLinks.data = shortLinks.data.sort(compareFn);

//link
document.getElementById("shortLinks").addEventListener("click", function (event) {
  let target = event.target;

  while (target !== this) {
    if (target.classList.contains('card')) {
      const link = shortLinks.data.find(e => e.shortLinkName === target.querySelector('.shortLink-name').innerText).link;
      navigator.clipboard.writeText(link);
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
    getShortLinks();
  }
});

//Search on click
searchBtn.addEventListener("click", getShortLinks);

function getShortLinks() {

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

async function loadRedirects() {
  redirects = (await fetch("https://raw.githubusercontent.com/augy-studios/gftv-redirects/refs/heads/main/vercel.json")).json().redirects

  for (let i of shortLinks.data) {

    //Create Card
    let card = document.createElement("div");

    //Card should have statusCode and should stay hidden initially
    card.classList.add("card", String(i.statusCode), "hide");

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //short link name
    let name = document.createElement("h3");
    name.classList.add("shortLink-name");
    name.innerText = i.shortLinkName;
    container.appendChild(name);

    //link
    let link = document.createElement("p");
    link.classList.add("shortLink-link");
    link.innerText = i.link;
    container.appendChild(link);

    //code
    let code = document.createElement("p");
    code.classList.add("shortLink-code");
    code.innerText = String(i.statusCode);
    container.appendChild(code);

    //redirects
    let redirect = document.createElement("p");
    redirect.classList.add("shortLink-redirect");
    for (let j of redirects) {
      if (j.source == i.shortLinkName) {
        redirect.innerText = j.destination;
        break;
      }
    }
    container.appendChild(redirect);

    //copy button
    let copyBtn = document.createElement("span");
    copyBtn.classList.add("shortLink-copyBtn material-symbols-rounded");
    copyBtn.title = "Click to copy me";
    copyBtn.style.color = "rgb(112, 112, 112)";
    container.appendChild(copyBtn);

    let copied = document.createElement("copied");
    copied.classList.add("shortLink-copied");
    copied.innerText = "Copied to clipboard";
    container.appendChild(copied);

    card.appendChild(container);
    document.getElementById("shortLinks").appendChild(card);
  }
  filterShortLink("all");
}

//Initially display all shortLinks
window.onload = async () => {
  document.getElementById("shortLinks").style.display = "none";
  document.getElementById("loader").style.display = "block";
  await loadRedirects();
  document.getElementById("loader").style.display = "none";
  document.getElementById("shortLinks").style.display = "grid";
};
