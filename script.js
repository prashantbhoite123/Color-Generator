const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

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
  // window.location.reload();
  console.log(color);
  body.style.backgroundColor = color;
  stop.innerHTML = color;
});
