

 export function createTechBadge(tech) {

    const icons = {
        JavaScript: "devicon-javascript-plain colored",
        TypeScript: "devicon-typescript-plain colored",
        Python: "devicon-python-plain colored",
        Java: "devicon-java-plain colored",
        PHP: "devicon-php-plain colored",
        C: "devicon-c-plain colored",
        "C++": "devicon-cplusplus-plain colored",
        "C#": "devicon-csharp-plain colored",
        Ruby: "devicon-ruby-plain colored",
        Go: "devicon-go-original-wordmark colored",
        Rust: "devicon-rust-plain",
        Swift: "devicon-swift-plain colored",
        Kotlin: "devicon-kotlin-plain colored",
        Dart: "devicon-dart-plain colored",
        R: "devicon-r-plain colored",
        HTML: "devicon-html5-plain colored",
        CSS: "devicon-css3-plain colored",
        Shell: "devicon-bash-plain",
        Vue: "devicon-vuejs-plain colored",
        React: "devicon-react-original colored",
        Angular: "devicon-angularjs-plain colored",
        Laravel: "devicon-laravel-original colored",
        Express: "devicon-express-original",
        Node: "devicon-nodejs-plain colored",
        MySQL: "devicon-mysql-plain colored",
        PostgreSQL: "devicon-postgresql-plain colored",
        MongoDB: "devicon-mongodb-plain colored",
        Docker: "devicon-docker-plain colored",
        Git: "devicon-git-plain colored"
    };
    const techConfig = {
    JavaScript: {
        icon: "devicon-javascript-plain",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/30"
    },
    TypeScript: {
        icon: "devicon-typescript-plain",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/30"
    },
    React: {
        icon: "devicon-react-original",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/30"
    },
    Laravel: {
        icon: "devicon-laravel-original",
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "border-red-400/30"
    },
    Express: {
        icon: "devicon-express-original",
        color: "text-gray-300",
        bg: "bg-gray-400/10",
        border: "border-gray-400/30"
    },
    Node: {
        icon: "devicon-nodejs-plain",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/30"
    },
    MySQL: {
        icon: "devicon-mysql-plain",
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "border-sky-400/30"
    },
    HTML: {
        icon: "devicon-html5-plain",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30"
    },
    CSS: {
        icon: "devicon-css3-plain",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30"
    },
    Python: {
        icon: "devicon-python-plain",
        color: "text-yellow-300",
        bg: "bg-yellow-300/10",
        border: "border-yellow-300/30"
    },
    PHP: {
        icon: "devicon-php-plain",
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        border: "border-indigo-400/30"
    },
    Ruby: {
        icon: "devicon-ruby-plain",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30"
    },
    Java: {
        icon: "devicon-java-plain",
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/30"
    },
    MongoDB: {
        icon: "devicon-mongodb-plain",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/30"
    },
    PostgreSQL: {
        icon: "devicon-postgresql-plain",
        color: "text-blue-300",
        bg: "bg-blue-300/10",
        border: "border-blue-300/30"
    },
    Docker: {
        icon: "devicon-docker-plain",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/30"
    },
    Git: {
        icon: "devicon-git-plain",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30"
    }
};

    const iconClass = icons[tech] || "fa-solid fa-code";

    const config = techConfig[tech] || {
        icon: "devicon-devicon-plain",
        color: "text-gray-300",
        bg: "bg-gray-400/10",
        border: "border-gray-400/30"
    };

    return `
        <span class="inline-flex items-center gap-2 px-4 py-2
                     ${config.bg} ${config.border}
                     border rounded-lg text-sm ${config.color}">

            <i class="${config.icon} text-base"></i>

            ${tech}
        </span>
    `;
}