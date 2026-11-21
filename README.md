# DevScope

Application web pour recruteurs tech : rechercher un développeur par son nom d'utilisateur GitHub, consulter son profil et ses dépôts publics, l'ajouter à une **shortlist** de candidats (API REST MockAPI), puis suivre son avancement dans le recrutement.

- **Version 1** (09/11/2026 → 13/11/2026) : recherche, profil, shortlist. Elle reste accessible via le tag Git [`v1.0`](https://github.com/usefexe/DEVSCOPE/releases/tag/v1.0).
- **Version 2** (16/11/2026 → 20/11/2026) : modification et suppression des candidats, recherche et filtre des dépôts, cache, plus plusieurs bonus. Développée dans le même dépôt, sans casser la v1.

Projet individuel réalisé dans le cadre de la formation YouCode / Simplonline.

## Liens du projet

| Ressource | Lien |
|---|---|
| Application déployée | [devscope-lilac.vercel.app](https://devscope-lilac.vercel.app/) |
| Dépôt GitHub | [github.com/usefexe/DEVSCOPE](https://github.com/usefexe/DEVSCOPE) |
| Tableau Jira (epic « DevScope v2 ») | [Tableau DEVSCOPE](https://youssefaitsalh545.atlassian.net/jira/software/projects/DEV/boards/34) |
| Présentation | [Canva](https://www.canva.com/design/DAHa7IGqyIs/oqoSGaPxilmtgaIVsMczxg/edit?ui=eyJBIjp7fX0) |

## Fonctionnalités

### Page Recherche (`index.html`)
- Champ « Nom d'utilisateur » et bouton « Analyser ».
- Validation du nom **avant** toute requête : lettres, chiffres et tirets, 1 à 39 caractères, sans tiret au début ni à la fin (regex dans `js/validation/validenom.js`).
- Message d'erreur sous le champ si le nom est invalide, sinon redirection vers la page Profil.

### Page Profil (`search.html`)
- Récupération du profil et des dépôts via l'API GitHub, **en parallèle avec `Promise.all`**.
- Carte profil : photo, nom, login, bio, ville, date d'inscription, nombre de dépôts, abonnés, abonnements, lien GitHub, avec texte par défaut quand une information est `null`.
- Liste des dépôts sous forme de cartes (nom, langage, étoiles, forks, date de mise à jour).
- Indicateur de chargement et message « développeur introuvable » en cas d'erreur.
- Bouton « Ajouter à la shortlist » (`POST` JSON vers MockAPI) avec notification de succès ; impossible d'ajouter deux fois le même candidat.
- **Nouveau v2 :** champ de recherche par nom de dépôt et liste déroulante de langages, combinés avec `filter` côté navigateur.
- **Nouveau v2 :** pagination des dépôts par pages de 6 (boutons précédent / suivant).
- **Nouveau v2 :** badge du quota GitHub (requêtes restantes, limite, minutes avant réinitialisation).

### Page Shortlist (`shortlist.html`)
- Chargement des candidats depuis MockAPI (`GET`).
- Cartes candidat : avatar, login, langage, **statut** (À contacter, Entretien, Retenu, Refusé), **note sur 5**, **commentaire**, date d'ajout.
- Recherche en temps réel par login avec `filter`.
- Message dédié quand la shortlist est vide.
- **Nouveau v2 – Modification :** bouton « Modifier » → fenêtre (statut, note de 1 à 5 par étoiles, commentaire) → requête `PUT` → la liste est rafraîchie sans recharger la page.
- **Nouveau v2 – Suppression :** bouton « Supprimer » → fenêtre de confirmation → requête `DELETE` → la carte disparaît de la liste.
- **Nouveau v2 – Annulation :** après confirmation, un bouton « Annuler » reste disponible pendant 5 secondes (compte à rebours et barre de progression) ; la requête `DELETE` n'est envoyée qu'à la fin du délai.
- **Nouveau v2 – Onglets :** filtre de la shortlist par statut.

### Page Comparer (`compar.html`) — bonus
- Depuis une carte de la shortlist, choix d'un second développeur puis ouverture de `compar.html?div1=...&div2=...`.
- Les deux profils et leurs dépôts sont chargés **en même temps avec `Promise.all`** (4 requêtes en parallèle).
- Affichage côte à côte : statistiques, langages et comparaison.
- Analyse textuelle générée par une IA (API Groq) à partir des projets des deux développeurs. Cette partie est optionnelle : aucune clé n'est stockée dans le dépôt, l'analyse ne fonctionne que si une clé est fournie en local.

## Cache (performance)

Un profil déjà consulté est conservé dans `localStorage` pendant **10 minutes** : il s'affiche immédiatement, sans nouvelle requête vers GitHub (vérifiable dans l'onglet Network).

| Étape | Fonction | Fichier |
|---|---|---|
| Écriture | `saveCatch(nom, données)` → `JSON.stringify` + `localStorage.setItem` | `js/storage/chache.js` |
| Lecture et expiration | `getCatch(nom)` → `JSON.parse`, renvoie les données si le profil a moins de 10 minutes, sinon `undefined` | `js/storage/chache.js` |
| Utilisation | cache lu avant tout appel API, sinon `Promise.all` puis enregistrement | `js/datafetch/getUser.js` |
| Réglages | `CACHE_DURATION` (10 min) et `CACHE_PREFIX` | `js/config.js` |

Les données sont enregistrées avec la date de sauvegarde (`saveat`) ; au-delà de `CACHE_DURATION`, une nouvelle requête est envoyée.

## Stack technique

- **HTML5** et **Tailwind CSS v4** (via CDN), approche mobile-first
- **JavaScript ES6** en modules (`import` / `export`)
- **Axios** (via CDN) pour toutes les requêtes : GitHub, MockAPI et API d'analyse
- **API GitHub** (profils, dépôts publics, quota)
- **MockAPI** (API REST de la shortlist : `GET`, `POST`, `PUT`, `DELETE`)
- **localStorage** (cache des profils et état partagé entre pages)
- **Font Awesome** pour les icônes
- Déploiement sur **Vercel**

## Architecture du projet

```
DEVSCOPE/
├── index.html              # Page Recherche
├── search.html             # Page Profil
├── shortlist.html          # Page Shortlist
├── compar.html             # Page Comparer (bonus)
├── imgs/                   # Images et logo
├── devscope-mock-data.json
└── js/
    ├── config.js           # URLs des API, statuts, durée et préfixe du cache
    ├── index.js            # Point d'entrée page Recherche
    ├── search.js           # Point d'entrée page Profil
    ├── shortlist.js        # Point d'entrée page Shortlist
    ├── compar.js           # Point d'entrée page Comparer
    ├── datafetch/          # Appels API
    │   ├── getUser.js          # profil + dépôts (Promise.all) avec cache
    │   ├── getShortlist.js     # GET shortlist (+ recherche et filtre par statut)
    │   ├── getOneuser.js       # GET d'un candidat
    │   ├── postuser.js         # POST d'un candidat
    │   ├── Editeuser.js        # PUT : modification d'un candidat
    │   ├── deleteShUs.js       # DELETE : suppression d'un candidat
    │   ├── getRateCount.js     # quota GitHub
    │   ├── getUserTocompar.js  # 2 profils + 2 listes de dépôts (Promise.all)
    │   └── getAnalyseCompare.js# analyse IA de la comparaison
    ├── storage/            # Cache et état
    │   ├── chache.js           # saveCatch() / getCatch() : cache localStorage
    │   ├── state.js            # état partagé (recherche, filtres, pagination)
    │   └── updatestorage.js
    ├── event/              # Écouteurs d'événements (modification, suppression, pagination, recherche…)
    ├── ui/                 # Affichage (profil, dépôts, shortlist, annulation, états, quota…)
    └── validation/         # Validation du nom, détection de doublon
```

## Lancer le projet en local

Les modules ES6 nécessitent un serveur HTTP (l'ouverture directe du fichier ne fonctionne pas).

```bash
git clone https://github.com/usefexe/DEVSCOPE.git
cd DEVSCOPE

# Option 1 : extension « Live Server » de VS Code
# Option 2 :
npx serve .
```

Puis ouvrir l'adresse indiquée dans le terminal (ex. `http://localhost:3000`).

## Gestion des erreurs

| Cas | Comportement |
|---|---|
| Nom d'utilisateur invalide | Message sous le champ, aucune requête envoyée |
| Développeur introuvable (404) | Écran « introuvable » |
| Erreur réseau / MockAPI | Message d'erreur, shortlist vide affichée |
| Candidat déjà présent | Bouton désactivé |
| Aucun dépôt ne correspond à la recherche ou au filtre | Liste vide |
| Suppression annulée dans les 5 secondes | Aucune requête `DELETE` envoyée |
| Profil consulté depuis moins de 10 minutes | Lu dans `localStorage`, aucune requête GitHub |

## Sécurité

- Aucun token GitHub dans le code ni dans l'historique du dépôt : les appels à l'API GitHub se font sans authentification.
- Aucune clé d'API n'est enregistrée dans le dépôt (l'analyse IA de la page Comparer est désactivée tant qu'aucune clé n'est fournie localement).

## Organisation du travail

- **Jira** : epic « DevScope v2 », une user story par ticket, découpée en sous-tâches.
- **Git** : tag `v1.0` pour la v1, branches `feat/...` fusionnées dans `develop` par pull requests, puis `main`.
- **Commits** liés aux tickets Jira (ex. `DEV-24 : suppression d'un candidat`).
- Poussée de l'avancement sur GitHub chaque soir.

### Planning v2

| Jour | Travail |
|---|---|
| Lun 16/11 | Tag `v1.0`, epic Jira, recherche et filtre des dépôts |
| Mar 17/11 | Modification d'un candidat (`PUT`), fenêtre, mise à jour de la carte |
| Jeu 19/11 | Suppression (`DELETE`) avec confirmation, cache, `Promise.all` |
| Ven 20/11 | Tests des erreurs, README, déploiement, Jira à jour, bonus |

## Bonus réalisés

- Filtre de la shortlist par statut (onglets)
- Annulation d'une suppression pendant 5 secondes
- Comparaison de deux développeurs (`compar.html`, `Promise.all`)
- Pagination des dépôts par pages de 6
- Réécriture des requêtes avec Axios
- Badge du quota de l'API GitHub

## Limites connues et pistes d'amélioration

- La liste des langages du filtre est écrite dans `search.html` : elle pourrait être générée à partir des dépôts chargés.
- Tri des dépôts (étoiles, date, nom) et statistiques de profil non réalisés.
- Messages distincts pour les erreurs 403 / 429 de GitHub (limite de requêtes) et bouton « Réessayer » à ajouter.

## Auteur

**Youssef** : projet réalisé dans le cadre de la formation (YouCode / Simplone).