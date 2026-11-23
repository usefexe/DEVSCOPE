

 export function createTechBadge(tech) {


   
const makeTech = (icon, color) => ({
    icon: `devicon-${icon}-plain`,
    color: `text-${color}`,
    bg: `bg-${color}/10`,
    border: `border-${color}/30`
});

const techConfig = {

    // ===== PROGRAMMING LANGUAGES =====

    JavaScript: makeTech("javascript", "yellow-400"),
    TypeScript: makeTech("typescript", "blue-400"),
    Python: makeTech("python", "yellow-300"),
    Java: makeTech("java", "orange-400"),
    C: makeTech("c", "blue-500"),
    "C++": makeTech("cplusplus", "blue-400"),
    "C#": makeTech("csharp", "purple-400"),
    PHP: makeTech("php", "indigo-400"),
    Ruby: makeTech("ruby", "red-500"),
    Go: makeTech("go", "cyan-400"),
    Rust: makeTech("rust", "orange-400"),
    Swift: makeTech("swift", "orange-500"),
    Kotlin: makeTech("kotlin", "purple-400"),
    Dart: makeTech("dart", "blue-400"),
    R: makeTech("r", "blue-400"),
    Scala: makeTech("scala", "red-500"),
    Perl: makeTech("perl", "blue-400"),
    Lua: makeTech("lua", "blue-400"),
    Haskell: makeTech("haskell", "purple-400"),
    Elixir: makeTech("elixir", "purple-400"),
    Erlang: makeTech("erlang", "red-400"),
    Clojure: makeTech("clojure", "green-400"),
    FSharp: makeTech("fsharp", "blue-400"),
    OCaml: makeTech("ocaml", "orange-400"),
    Julia: makeTech("julia", "purple-400"),
    MATLAB: makeTech("matlab", "orange-400"),
    ObjectiveC: makeTech("objectivec", "blue-400"),
    Groovy: makeTech("groovy", "green-400"),
    Solidity: makeTech("solidity", "gray-300"),
    Crystal: makeTech("crystal", "gray-300"),
    Zig: makeTech("zig", "orange-400"),
    Nim: makeTech("nim", "yellow-400"),
    Elm: makeTech("elm", "blue-400"),
    Fortran: makeTech("fortran", "purple-400"),
    COBOL: makeTech("cobol", "blue-300"),
    Assembly: makeTech("assembly", "gray-300"),
    "Visual Basic": makeTech("visualbasic", "blue-400"),
    "VB.NET": makeTech("dotnet", "purple-400"),
    PowerShell: makeTech("powershell", "blue-400"),
    Bash: makeTech("bash", "green-400"),
    Shell: makeTech("bash", "green-400"),

    // ===== WEB DEVELOPMENT =====

    HTML: makeTech("html5", "orange-500"),
    CSS: makeTech("css3", "blue-500"),
    SCSS: makeTech("sass", "pink-400"),
    Sass: makeTech("sass", "pink-400"),
    Less: makeTech("less", "blue-400"),
    Vue: makeTech("vuejs", "green-400"),
    React: makeTech("react", "cyan-400"),
    Angular: makeTech("angular", "red-500"),
    Svelte: makeTech("svelte", "orange-500"),
    Nextjs: makeTech("nextjs", "gray-200"),
    Nuxt: makeTech("nuxtjs", "green-400"),
    Astro: makeTech("astro", "orange-400"),
    jQuery: makeTech("jquery", "blue-400"),
    Bootstrap: makeTech("bootstrap", "purple-400"),
    Tailwind: makeTech("tailwindcss", "cyan-400"),
    "Tailwind CSS": makeTech("tailwindcss", "cyan-400"),
    MaterialUI: makeTech("materialui", "blue-400"),

    // ===== BACKEND & FRAMEWORKS =====

    Laravel: makeTech("laravel", "red-400"),
    Symfony: makeTech("symfony", "gray-200"),
    Express: makeTech("express", "gray-300"),
    Node: makeTech("nodejs", "green-400"),
    "Node.js": makeTech("nodejs", "green-400"),
    NestJS: makeTech("nestjs", "red-400"),
    Django: makeTech("django", "green-400"),
    Flask: makeTech("flask", "gray-200"),
    FastAPI: makeTech("fastapi", "teal-400"),
    Spring: makeTech("spring", "green-400"),
    "Spring Boot": makeTech("spring", "green-400"),
    Rails: makeTech("rails", "red-400"),
    "Ruby on Rails": makeTech("rails", "red-400"),
    ASPNET: makeTech("dotnetcore", "purple-400"),
    ".NET": makeTech("dotnetcore", "purple-400"),
    Nest: makeTech("nestjs", "red-400"),

    // ===== DATABASES =====

    MySQL: makeTech("mysql", "sky-400"),
    PostgreSQL: makeTech("postgresql", "blue-400"),
    MongoDB: makeTech("mongodb", "green-500"),
    SQLite: makeTech("sqlite", "blue-400"),
    Redis: makeTech("redis", "red-500"),
    MariaDB: makeTech("mariadb", "blue-400"),
    Oracle: makeTech("oracle", "red-500"),
    Firebase: makeTech("firebase", "yellow-400"),
    Supabase: makeTech("supabase", "green-400"),
    Cassandra: makeTech("cassandra", "blue-400"),
    Elasticsearch: makeTech("elasticsearch", "yellow-400"),

    // ===== DEVOPS & TOOLS =====

    Git: makeTech("git", "orange-500"),
    GitHub: makeTech("github", "gray-200"),
    GitLab: makeTech("gitlab", "orange-500"),
    Docker: makeTech("docker", "blue-400"),
    Kubernetes: makeTech("kubernetes", "blue-400"),
    Linux: makeTech("linux", "yellow-400"),
    Ubuntu: makeTech("ubuntu", "orange-500"),
    Nginx: makeTech("nginx", "green-400"),
    Apache: makeTech("apache", "red-400"),
    Jenkins: makeTech("jenkins", "gray-300"),
    Terraform: makeTech("terraform", "purple-400"),
    AWS: makeTech("amazonwebservices", "orange-400"),
    Azure: makeTech("azure", "blue-400"),

    // ===== MOBILE DEVELOPMENT =====

    Flutter: makeTech("flutter", "blue-400"),
    Android: makeTech("android", "green-400"),
    iOS: makeTech("apple", "gray-200"),
    ReactNative: makeTech("react", "cyan-400"),

    // ===== DATA SCIENCE & AI =====

    TensorFlow: makeTech("tensorflow", "orange-400"),
    PyTorch: makeTech("pytorch", "orange-500"),
    Pandas: makeTech("pandas", "purple-400"),
    NumPy: makeTech("numpy", "blue-400"),
    OpenCV: makeTech("opencv", "green-400"),

};

  


    const config = techConfig[tech];

    if (!config) {
        return `
            <span class="inline-flex items-center gap-2 px-4 py-2
                         bg-gray-400/10 border border-gray-400/30
                         rounded-lg text-sm text-gray-300">
                <i class="fa-solid fa-code"></i>
                ${tech}
            </span>
        `;
    }

    return `
        <span class="inline-flex items-center gap-2 px-4 py-2
                     ${config.bg} ${config.border}
                     border rounded-lg text-sm ${config.color}">

            <i class="${config.icon} text-base"></i>
            ${tech}

        </span>
    `;
}
