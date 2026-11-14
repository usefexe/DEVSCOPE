# DevScope

Application web pour recruteurs tech : rechercher un développeur par son nom d'utilisateur GitHub, consulter son profil et ses dépôts publics, puis l'ajouter à une **shortlist** de candidats enregistrée sur une API REST (MockAPI).

Projet réalisé dans le cadre du brief **DevScope** (individuel, 09/11/2026 → 13/11/2026).

## Liens du projet

| Ressource | Lien |
|---|---|
| Application déployée | [devscope-lilac.vercel.app](https://devscope-lilac.vercel.app/) |
| Dépôt GitHub | [github.com/usefexe/DEVSCOPE](https://github.com/usefexe/DEVSCOPE.git) |
| Tableau Jira | [Backlog DEVSCOPE](https://youssefaitsalh545.atlassian.net/jira/software/projects/DEV/boards/34/backlog?atlOrigin=eyJpIjoiODkyZDBhNDczMzVhNDEzYjg1ZjMwODEzM2NjNzM5MDQiLCJwIjoiaiJ9) |
| Présentation | [Canva](https://www.canva.com/design/DAHa7IGqyIs/oqoSGaPxilmtgaIVsMczxg/edit?ui=eyJBIjp7fX0) |

## Fonctionnalités

### Page Recherche (`index.html`)
- Champ « Nom d'utilisateur » et bouton « Analyser ».
- Validation du nom **avant** toute requête : lettres, chiffres et tirets, 1 à 39 caractères, sans tiret au début ni à la fin (regex dans `js/validation/validenom.js`).
- Message d'erreur sous le champ si le nom est invalide, sinon redirection vers la page Profil.

### Page Profil (`search.html`)
- Récupération du profil et des dépôts via l'API GitHub (`fetch`, `async / await`, `try / catch`, vérification de `response.ok`).
- Carte profil : photo, nom, login, bio, ville, date d'inscription, nombre de dépôts, abonnés, abonnements, lien vers le profil GitHub, avec texte par défaut quand une information est `null`.
- Liste des dépôts sous forme de cartes (nom, langage, étoiles, forks, date de mise à jour).
- Indicateur de chargement et message « développeur introuvable » en cas d'erreur.
- Bouton « Ajouter à la shortlist » : envoi d'un `POST` JSON vers MockAPI, notification de succès, **impossible d'ajouter deux fois le même candidat** (bouton désactivé).

### Page Shortlist (`shortlist.html`)
- Chargement des candidats depuis MockAPI (`GET`).
- Cartes candidat : avatar, nom, login, langage, note, statut, date d'ajout.
- Recherche en temps réel par login avec `filter`.
- Message dédié quand la shortlist est vide.

## Stack technique

- **HTML5** et **Tailwind CSS v4** (via CDN), approche mobile-first
- **JavaScript ES6** en modules (`import` / `export`)
- **API GitHub** (profils et dépôts publics)
- **MockAPI** (API REST pour la shortlist)
- **Font Awesome** pour les icônes
- Déploiement sur **Vercel**

## Architecture du projet

```
DEVSCOPE/
├── index.html            # Page Recherche
├── search.html           # Page Profil
├── shortlist.html        # Page Shortlist
├── imgs/                 # Images et logo
├── devscope-mock-data.json
└── js/
    ├── index.js          # Point d'entrée page Recherche
    ├── search.js         # Point d'entrée page Profil
    ├── shortlist.js      # Point d'entrée page Shortlist
    ├── datafetch/        # Appels API (GitHub, MockAPI)
    │   ├── getUser.js
    │   ├── getShortlist.js
    │   └── postuser.js
    ├── event/            # Écouteurs d'événements
    ├── ui/               # Affichage (profil, dépôts, shortlist, états)
    ├── validation/       # Validation du nom, détection de doublon
    └── storage/          # État partagé entre modules
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

## Limites connues et pistes d'amélioration

- Tri de la shortlist (par nom / date d'ajout) à finaliser.
- Boutons « Modifier » et « Supprimer » : interface prête, logique à brancher (`PUT` / `DELETE` sur MockAPI).
- Bouton « Réessayer » et messages distincts pour 403 / 429 (limite de requêtes GitHub).
- BONUS : recherche, filtre par langage, tri et pagination des dépôts, compteur de requêtes restantes.

## Organisation du travail

- Planification : tableau Jira organisé en epics et tickets.
- Versionnement : commits réguliers sur GitHub, liés aux tickets Jira.

## Auteur

**Youssef** : projet réalisé dans le cadre de la formation (YouCode / Simplone).