const container = document.querySelector(".container")
for (let j=0; j<16; j++) {
    const divContainer = document.createElement("div")
    divContainer.classList.add("divContainer")
    container.appendChild(divContainer)
    for (let i=0; i<16; i++) {
        const div = document.createElement("div")
        div.classList.add("partOfGrid")
        div.textContent = "KAREN"
        divContainer.appendChild(div)
    }
}