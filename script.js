const container = document.querySelector(".container")
for (let j=0; j<16; j++) {
    const divContainer = document.createElement("div")
    divContainer.classList.add("divContainer")
    container.appendChild(divContainer)
    for (let i=0; i<16; i++) {
        const div = document.createElement("div")
        div.classList.add("partOfGrid")
        div.style.width = "500/16px"
        div.style.height = "500/16px"
        divContainer.appendChild(div)
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = 'lightgreen'
        })
    }
}

const btn = document.querySelector("button")
btn.addEventListener("click", (e) => {
    let num = prompt("How many grids per side do you want?", 16)
})