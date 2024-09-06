const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
let container = document.querySelector(".container");
let colorName = document.querySelector(".colorName");

const codeGenerated = ["#000"];

let tracker = 0;
let disable = false;

const colorGenerator = () => {
  const hex = "123456789abcdef";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = parseInt(Math.random() * 15);
    hexCode += hex.charAt(randomNumber);
  }
  codeGenerated.push(hexCode);
};

const next = () => {
  if (tracker >= codeGenerated.length - 1) {
    colorGenerator();
    tracker += 1;
  } else {
    tracker += 1;
  }
};

const previous = () => {
  if (tracker > 0) {
    tracker -= 1;
  }
};

previousButton.addEventListener("click", (event) => {
  previous();
  container.style.background = codeGenerated[tracker];
});

nextButton.addEventListener("click", (event) => {
  next();
  container.style.background = codeGenerated[tracker];
  colorName.innerHTML = codeGenerated[tracker];
  console.log(codeGenerated);
});
