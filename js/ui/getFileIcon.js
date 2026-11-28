const icons = [
    { extension: "html", icon: "fa-brands fa-html5 text-orange-500" },
    { extension: "css", icon: "fa-brands fa-css3-alt text-blue-500" },
    { extension: "js", icon: "fa-brands fa-js text-yellow-400" },
    { extension: "jsx", icon: "fa-brands fa-react text-cyan-400" },
    { extension: "ts", icon: "devicon-typescript-plain text-blue-500" },
    { extension: "tsx", icon: "fa-brands fa-react text-blue-400" },
    { extension: "php", icon: "fa-brands fa-php text-indigo-400" },
    { extension: "py", icon: "fa-brands fa-python text-blue-400" },
    { extension: "json", icon: "fa-solid fa-file-code text-yellow-500" },
    { extension: "md", icon: "fa-brands fa-markdown text-slate-200" },
    { extension: "png", icon: "fa-solid fa-file-image text-purple-400" },
    { extension: "jpg", icon: "fa-solid fa-file-image text-purple-400" },
    { extension: "svg", icon: "fa-solid fa-file-image text-purple-400" },
    { extension: "sql", icon: "fa-solid fa-database text-cyan-400" },
    { extension: "gitignore", icon: "fa-brands fa-git-alt text-orange-500" },
    { extension: "java", icon: "fa-brands fa-java text-red-400" }
];

export function getFileIcon(filename) {
    const defaultIcon = "fa-solid fa-file text-slate-400";

    if (!filename.includes(".")) {
        return defaultIcon;
    }

    const extension = filename
        .slice(filename.lastIndexOf(".") + 1)
        .toLowerCase();

    const result = icons.find(el => el.extension === extension);

    return result ? result.icon : defaultIcon;
}