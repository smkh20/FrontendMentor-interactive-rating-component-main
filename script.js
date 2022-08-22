const pArrays = document.querySelectorAll(".get")
let score;
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