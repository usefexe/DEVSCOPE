import { createTechBadge } from "./showTEchIcone.js";
export function renderTechnologies(technologies, container) {

    container.innerHTML = "";

    technologies.forEach(tech => {
        container.insertAdjacentHTML("beforeend", createTechBadge(tech));
    });

}