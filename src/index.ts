import { Messages } from "./lib/messages";
import * as _ from "lodash";

window.addEventListener("load", () => {
    const header = document.createElement("h1");
    header.innerText = "Webpack❤️TS"

    const body = document.querySelector("#root");
    body.appendChild(header);

    const food = [{id: 0, name: "pizza"}, {id: 1, name: "sushi"}]

    const foodElement = document.createElement("h2")
    foodElement.innerText = _.find(food, {id: 0})?.name;

    body.appendChild(foodElement);
});

const msg: Messages = new Messages('Webpack and typescript', 'webpack and typescript is awesome.');
console.log(msg.showMessage());

