const pArrays = document.querySelectorAll(".get")
const submitbtn = document.querySelector(".btn")
const rate = document.getElementById("rate")
const thank = document.getElementById("thank")
const textScore = document.getElementById("textSubmitedScore")
let score;
submitbtn.addEventListener("click", () => {
    if (score) {
        textSubmitedScore.innerHTML = `You selected ${score} out of 5`
        rate.style = "display: none"
        thank.style = "display: flex"
    }
})
pArrays.forEach((item) => {
    item.addEventListener("click", () => { toggleActiv(item) })

})
const toggleActiv = (tag) => {
    const selectedscore = document.querySelector(".active")
    if (selectedscore === tag) {
        selectedscore.classList.remove("active")
        score = ""
    } else if (selectedscore) {
        selectedscore.classList.remove("active")
        tag.classList.add("active")
        score = +tag.innerHTML
    } else {
        tag.classList.add("active")
        score = +tag.innerHTML
    }
    console.log(score)
}