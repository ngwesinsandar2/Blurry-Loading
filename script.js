const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

//Solution by myself
// let count = 0;
// let random = 1;

// window.addEventListener("load", () => {
//     setInterval(() => {
//         count += 1;
//         loadingText.textContent = count + "%"
//     }, 150);

//     setTimeout(() => {
//         bg.classList.add("afterLoad");
//     }, 2000);

//     setTimeout(() => {
//         loadingText.style.display = "none";
//     }, 3000);

//     random = Math.trunc((Math.random() * 3) + 1);
//     bg.style.backgroundImage = `url(./images/${random}.png)`
// })

//Solution by my BMPS teacher ITYan Tote
let loadNum = 0;
let random = 1;

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const bluring = () => {
    loadNum += 1;
    loadNum > 99 && clearInterval(init);
    loadingText.textContent = `${loadNum}%`;
    loadingText.style.opacity = `${scale(loadNum, 0, 100, 1, 0)}`;
    bg.style.filter = `blur(${scale(loadNum, 0, 100, 30, 0)}px)`;
}
const init = setInterval(bluring, 30);

//Added by myself
window.addEventListener("load", () => {
    random = Math.trunc((Math.random() * 4) + 1);
    console.log(random)
    bg.style.backgroundImage = `url(./images/${random}.png)`;
})