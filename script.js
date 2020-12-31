const text = document.querySelector("textarea");
const counter = document.querySelector(".count");

text.addEventListener('keydown', () => {
    const textString = text.value;

    const wordsList = textString.split(" ");
    counter.innerHTML = wordsList.length;
});
