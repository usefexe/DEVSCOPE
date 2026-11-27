

export function getContributionColor(level, colors) {
    const colors1 = [
    "#202A3D",
    "#164E63",
    "#0E7490",
    "#06B6D4",
    "#67E8F9"
]

const colors2 = [
    "#202A3D",
    "#3B2463",
    "#6D28D9",
    "#8B5CF6",
    "#C4B5FD"
]
    return colors[level] ?? colors[0]
}