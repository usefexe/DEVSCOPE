export function valideNom(name) {
  const nmRgx = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;

  return nmRgx.test(name.trim());
}
