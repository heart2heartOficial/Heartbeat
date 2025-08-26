import { emitText } from "./socket-front.js";

const text_client = document.getElementById("text-id");

text_client.addEventListener("keyup", () => {
   emitText(text_client.value);
});


function updateText(text) {
    text_client.value = text;
}


export { updateText };