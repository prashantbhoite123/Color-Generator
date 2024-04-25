const generatColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

// console.log(color);

start.addEventListener("click", (e) => {
  const color = generatColor();
  // window.location.reload();
  console.log(color);
  body.style.backgroundColor = color;
  stop.innerHTML = color;
});
