
export function renderComparison(comparison,d1,d2) {

    const similaritiesContainer = document.getElementById("comparisonSimilarities");
    const differencesContainer = document.getElementById("comparisonDifferences");
    const summaryContainer = document.getElementById("comparisonSummary");

    // Similarities
    similaritiesContainer.innerHTML = "";

    comparison.similarities.forEach(item => {

        const li = document.createElement("li");
        li.className = `flex items-start gap-3 bg-emerald-400/5
                        rounded-xl p-4`;

        const icon = document.createElement("i");
        icon.className = "fa-solid fa-check text-emerald-400 mt-1";

        const p = document.createElement("p");
        p.className = "text-sm text-slate-300";
        p.textContent = item;

        li.append(icon, p);
        similaritiesContainer.append(li);
    });


    // Differences
    differencesContainer.innerHTML = "";

    comparison.differences.forEach(item => {

        const li = document.createElement("li");
        li.className = `flex items-start gap-3 bg-amber-400/5
                        rounded-xl p-4`;

        const icon = document.createElement("i");
        icon.className = `fa-solid fa-arrows-left-right
                          text-amber-400 mt-1`;

        const p = document.createElement("p");
        p.className = "text-sm text-slate-300";
        p.textContent = item;

        li.append(icon, p);
        differencesContainer.append(li);
    });


    // AI Summary
    summaryContainer.textContent = comparison.summary;

}
