const texts = [
  "The future isn't waiting...",
  "EREN is coming online...",
  "Limited founding access opening soon...",
  "Only 100 early users will enter first...",
  "Building the next generation AI...",
  "Intelligence meets execution...",
  "Designed by RV Corporation...",
  "Welcome to EREN..."
];

let count = 0;

const typingElement = document.querySelector(".typing");

setInterval(() => {
  typingElement.textContent = texts[count];

  count++;

  if (count >= texts.length) {
    count = 0;
  }
}, 3000);