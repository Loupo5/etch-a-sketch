const container = document.querySelector(".container")
for (let j=0; j<16; j++) {
    const part = document.createElement("div")
    part.classList.add("one16th")
    container.appendChild(part)
    for (let i=0; i<16; i++) {
        const div = document.createElement("div")
        div.classList.add("partOfGrid")
        div.textContent = "KAREN"
        part.appendChild(div)
    }
}