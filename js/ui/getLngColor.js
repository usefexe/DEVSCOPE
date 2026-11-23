export function getLanguageColor(language) {
    const colors = {
        javascript: "#F7DF1E",
        typescript: "#3178C6",
        python: "#3776AB",
        java: "#ED8B00",
        php: "#777BB4",
        html: "#E34F26",
        css: "#1572B6",
        c: "#A8B9CC",
        "c++": "#00599C",
        "c#": "#68217A",
        ruby: "#CC342D",
        go: "#00ADD8",
        rust: "#DEA584",
        swift: "#F05138",
        kotlin: "#7F52FF",
        dart: "#0175C2",
        shell: "#89E051",
        sql: "#E38C00",
        vue: "#4FC08D",
        svelte: "#FF3E00"
    };

    return colors[language?.trim().toLowerCase()] || "#94A3B8";
}