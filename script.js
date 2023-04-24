const btn = document.querySelector(".btn");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
})