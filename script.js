const container = document.querySelector(".container")
let num = 16
makeGrid(num)
function makeGrid(num) {
    for (let j=0; j<num; j++) {
        const divContainer = document.createElement("div")
        divContainer.classList.add("divContainer")
        container.appendChild(divContainer)
        for (let i=0; i<num; i++) {
            const div = document.createElement("div")
            div.classList.add("partOfGrid")
            div.style.width = "(500/num)px"
            div.style.height = "(500/num)px"
            divContainer.appendChild(div)
            div.addEventListener("mouseenter", (e) => {
                div.style.backgroundColor = 'lightgreen'
            })
        }
    }
}

const btn = document.querySelector("button")
btn.addEventListener("click", (e) => {
    num = prompt("How many grids per side do you want?")
    if (num < 0 || num > 100) {
        prompt("ERROR - you can't load that number of grids")
    }
    if (!num) return "ERROR - please input a number"

    container.textContent = ""
    makeGrid(num)

})