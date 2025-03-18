function getRandomPop(min, max) {
  const pop = Math.round((Math.random() * (max - min) + min) / 1000) * 1000;
  return {
    value: pop,
    pretty: pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  };
}
const populationRange = [
  {
    imgSrc: "small.png",
    range: [1000, 100000],
  },
  {
    imgSrc: "medium.png",
    range: [100000, 500000],
  },
  {
    imgSrc: "large.png",
    range: [500000, 5000000],
  },
];
const environments = ["desert", "coastal", "grassland", "plains", "tundra"];
const modifiers = ["hilly ", "mountainous ", "foresty ", "lakeside "];

const pop = populationRange[Math.floor(Math.random() * 3)];
const city = {
  pop: getRandomPop(pop.range[0], pop.range[1]),
  region:
    (Math.random() * 4 > 1 ? modifiers[Math.floor(Math.random() * 4)] : "") +
    environments[Math.floor(Math.random() * 5)],
};
document.querySelector("p").innerHTML = `
  You need to plan a city with a population of ${city.pop.pretty} that is in a ${city.region} region.
`;
const img = document.querySelector("img");
img.src = pop.imgSrc;
let height = "120px";
switch (pop.imgSrc) {
  case "medium.png":
    height = "80px";
    break;
  case "small.png":
    height = "40px";
    break;
}
img.style.display = "block";
img.style.height = height;
