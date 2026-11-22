// js/config.js
export const GITHUB_API = "https://api.github.com";

export const MOCKAPI_URL = "https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user";

export const STATUSES = ["À contacter", "Entretien", "Retenu", "Refusé"];

export const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes en ms
export const CACHE_PREFIX = "devscope_";
export const api_ai=''

export const comparisonStructure = {
    developer1: {
        profile: {
            name: "",
            login: "",
            avatar_url: "",
            html_url: "",
            location: "",
            memberSince: ""
        },
        stats: {
            repositories: 0,
            followers: 0,
            stars: 0,
            forks: 0
        },
        languages: [
            {
                name: "",
                percentage: 0
            }
        ],
        activity: {
            lastUpdate: "",
            activeRepos: 0
        },
        shortlist: {
            note: null,
            rating: null
        }
    },

    developer2: {
        profile: {
            name: "",
            login: "",
            avatar_url: "",
            html_url: "",
            location: "",
            memberSince: ""
        },
        stats: {
            repositories: 0,
            followers: 0,
            stars: 0,
            forks: 0
        },
        languages: [
            {
                name: "",
                percentage: 0
            }
        ],
        activity: {
            lastUpdate: "",
            activeRepos: 0
        },
        shortlist: {
            note: null,
            rating: null
        }
    },

    comparison: {
        repositories: {
            dev1Percentage: 0,
            dev2Percentage: 0
        },
        followers: {
            dev1Percentage: 0,
            dev2Percentage: 0
        },
        stars: {
            dev1Percentage: 0,
            dev2Percentage: 0
        },
        forks: {
            dev1Percentage: 0,
            dev2Percentage: 0
        },
        commonLanguages: [],
        summary: ""
    }
};
// Pas de token GitHub ici ni ailleurs dans le code.