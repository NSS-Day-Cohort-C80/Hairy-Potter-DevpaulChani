// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 3, 8);
const bowl = makePottery("Bowl", 5, 7);
const vase = makePottery("Vase", 8, 14);
const plate = makePottery("Plate", 3, 6);
const jug = makePottery("Jug", 7, 9);
console.log(mug);
console.log(bowl);
console.log(vase);
console.log(plate);
console.log(jug);
// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2300);
const firedBowl = firePottery(bowl, 1900);
const firedVase = firePottery(vase, 1700);
const firedPlate = firePottery(plate, 1800);
const firedJug = firePottery(jug, 2100);
console.log(firedMug);
console.log(firedBowl);
console.log(firedVase);
console.log(firedPlate);
console.log(firedJug);
// Determine which ones should be sold, and their price
console.log(toSellOrNotToSell(firedMug))
console.log(toSellOrNotToSell(firedBowl))
console.log(toSellOrNotToSell(firedVase))
console.log(toSellOrNotToSell(firedPlate))
console.log(toSellOrNotToSell(firedJug))  
// Invoke the component function that renders the HTML list
const articleElement = document.querySelector(".PotteryList");
articleElement.innerHTML = PotteryList();

