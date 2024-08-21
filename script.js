// FOR NAVBAR

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// FOR FACT GENERATOR

var fact = $(".fact-button");
var faxDiv = $(".factDiv");

var factGenerator =
  ["Only 7.7% of women are in the engineering field (SWE).",
    "Women make up 47% of the US workforce, but only 25% of computing roles (CIO).",
    "50% of women leave their job before the age of 35 (Accenture).",
    "The ratio of men to women in tech firms is about 3:1 (Deloitte).",
    "31% of women with STEM degrees entered STEM occupations (Society of Women Engineers).",
    "Less than 20% of women earned computer science degrees (CIO).",
    "Women make up just 14% of the total software engineering workforce (Built In).",
    "The average salary of women in tech is over $15,000 less than men (CIO).",
    "Less than 1% of Fortune 500 CEOs are women of color (Women Business Collaborative).",
    "1.7% of women in tech identify as Latinx (CNBC).",
    "Black women only represent 3% of women in tech (CIO).",
    "50% of women in STEM have experienced discrimination at work (Pew Research).",
    "Just 1 in 4 startups have a female founder (CIO).",
    "5% of women in tech were Asian (Zhou)."]

fact.on("click", displayFact);

function displayFact() {
  faxDiv.empty();

  var randomIdx = Math.floor(Math.random() * factGenerator.length)

  var randomFact = factGenerator[randomIdx]

  faxDiv.append(randomFact)
}