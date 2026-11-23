import { getLanguageColor } from "./getLngColor.js";

export function showLanguageList(container, languages) {
    container.innerHTML = "";

    languages.forEach(el => {
        const div = document.createElement("div");
        div.className = "flex items-center gap-3";

        const color = document.createElement("span");
        color.className = "w-3 h-3 rounded-full shrink-0";
        color.style.backgroundColor = getLanguageColor(el.name);

        const name = document.createElement("span");
        name.className = "text-sm text-slate-300";
        name.textContent = el.name;

        const percentage = document.createElement("span");
        percentage.className = "ml-auto text-sm font-bold text-white";
        percentage.textContent = `${el.percentage}%`;

        div.append(color, name, percentage);
        container.appendChild(div);
    });
}