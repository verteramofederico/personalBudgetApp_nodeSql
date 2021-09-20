window.onload = function() {
    console.log("events js")

    let modifierForm = document.getElementById("modifierForm")
    let buttonModifierForm = document.getElementById("buttonModifierForm")

    buttonModifierForm.addEventListener("click", (e) => {
        console.log("ok")
        e.preventDefault()
        modifierForm.classList.toggle("modifierForm")
    })
}   