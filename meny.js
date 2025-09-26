// meny.js
import { resetScore } from "./score.js"

let menuElement = null

export function createMenu(options = {}) {
    if (menuElement) {
        menuElement.remove()
    }

    // menu container
    menuElement = document.createElement("div")
    menuElement.style.position = "fixed"
    menuElement.style.top = "0"
    menuElement.style.left = "0"
    menuElement.style.width = "100%"
    menuElement.style.height = "100%"
    menuElement.style.background = "rgba(0,0,0,0.7)"
    menuElement.style.display = "flex"
    menuElement.style.flexDirection = "column"
    menuElement.style.justifyContent = "center"
    menuElement.style.alignItems = "center"
    menuElement.style.zIndex = "1000"

    // title
    const title = document.createElement("h1")
    title.textContent = options.title || "Game Menu"
    title.style.color = "white"
    title.style.marginBottom = "20px"
    menuElement.appendChild(title)

    // buttons
    const buttons = options.buttons || [
        { text: "Restart", onClick: () => window.location.reload() },
        { text: "Reset Score", onClick: () => resetScore() },
        { text: "Close", onClick: () => closeMenu() }
    ]

    for (const btn of buttons) {
        const button = document.createElement("button")
        button.textContent = btn.text
        button.style.margin = "10px"
        button.style.padding = "10px 20px"
        button.style.fontSize = "18px"
        button.style.cursor = "pointer"
        button.style.borderRadius = "8px"
        button.style.border = "none"
        button.addEventListener("click", btn.onClick)
        menuElement.appendChild(button)
    }

    document.body.appendChild(menuElement)
}

export function closeMenu() {
    if (menuElement) {
        menuElement.remove()
        menuElement = null
    }
}
