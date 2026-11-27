import { getContributionColor } from "./getContrubitionColor.js"

export function showContributions(container, contributions, colors) {

    container.innerHTML = ""

    if (!contributions.length) return

   
    const firstDay = new Date(contributions[0].date).getUTCDay()

    for (let i = 0; i < firstDay; i++) {
        container.appendChild(document.createElement("div"))
    }

    
    contributions.forEach(day => {

        const div = document.createElement("div")

        div.classList.add(
             "w-[11px]",
    "h-[11px]",
    "rounded-[2px]",
    "cursor-pointer",
    "hover:ring-1",
    "hover:ring-white"
        )

        div.style.backgroundColor = getContributionColor(day.level, colors)

        div.title = `${day.date} : ${day.count} contributions`

        container.appendChild(div)
    })
}