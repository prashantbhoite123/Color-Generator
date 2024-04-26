const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#color-text");
const copyBtn = document.querySelector("#copyBtn");

const generatColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

// console.log(color);

start.addEventListener("click", (e) => {
  e.target.innerHTML = "Change Color";
  const color = generatColor();
  body.style.backgroundColor = color;
  stop.innerHTML = color;
  copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`;
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
    // .then(() => alert("color copied to clipboard"))
    // .catch((e) => console.log(`could not copy ${e}`));
    copyBtn.innerHTML === `<i class="fa-solid fa-copy"></i>`
      ? (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`)
      : (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`);
  });
});
