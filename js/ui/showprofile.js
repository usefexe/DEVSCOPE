const loadingState = document.getElementById("loadingState");
const notFound = document.getElementById("notFound");
function membreDepuis(date) {
  const newDate = new Date(date);

  return `Membre depuis ${newDate.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  })}`;
}
const profile = document.getElementById("profile");
export function showUser(uerdata) {
  loadingState.classList.add("hidden");
  notFound.classList.add("hidden");
  profile.classList.remove("hidden");
  document.getElementById("profileAvatar").src = uerdata.avatar_url;
  document.getElementById("profileName").textContent = uerdata.login;
  document.getElementById("profileUsername").textContent = `@${uerdata.login}`;
  document.getElementById("profileBio").textContent =
  uerdata.bio || "introuvable bio";
  document.getElementById("profileLocation").textContent =
  uerdata.location || "introuvable location ";
  document.getElementById("profileJoined").textContent = membreDepuis(
    uerdata.created_at,
  );
  document.getElementById("profileRepos").textContent = uerdata.public_repos;
  document.getElementById("profileFollowers").textContent = uerdata.followers;
  document.getElementById("profileFollowing").textContent = uerdata.following;
  document.getElementById("githubProfileLink").href = uerdata.html_url;
}
