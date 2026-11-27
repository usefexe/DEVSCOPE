export function showContributionLegend(container, colors) {

    const cells = container.querySelectorAll("span")

    cells.forEach((cell, index) => {
        cell.style.backgroundColor = colors[index]
    })

}